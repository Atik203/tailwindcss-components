import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, Menu, X, Monitor, Smartphone, Tablet, Laptop, 
  Copy, Check, ExternalLink, Folder, Compass, ChevronDown, 
  ChevronRight, Moon, Sun, RotateCw, Eye, Code, Terminal, 
  FileCode, Layers, Info, CheckCircle2, ChevronUp, Github
} from 'lucide-react';

const getFileExtension = (flavor) => {
  if (flavor === 'react') return 'jsx';
  if (flavor === 'vue') return 'vue';
  return 'html';
};

// Zero-dependency, high-performance regex-based syntax highlighter for HTML/JSX/Vue
const highlightCode = (code, language) => {
  if (!code) return '';
  // Escape HTML tags to prevent rendering issues
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  
  if (language === 'html') {
    escaped = escaped
      // Comments
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-slate-500 italic">$1</span>')
      // Custom Elements (e.g. el-dialog)
      .replace(/(&lt;\/?)(el-[\w-]+)/g, '$1<span class="text-amber-400 font-bold">$2</span>')
      // Standard HTML Tag Names
      .replace(/(&lt;\/?[a-z0-9]+)/g, '<span class="text-indigo-400 font-semibold">$1</span>')
      // Attributes
      .replace(/(\s)([\w-]+)=/g, '$1<span class="text-sky-400">$2</span>=')
      // String attribute values
      .replace(/(=)&quot;([\s\S]*?)&quot;/g, '$1<span class="text-emerald-400">&quot;$2&quot;</span>')
      .replace(/(=)&#x27;([\s\S]*?)&#x27;/g, '$1<span class="text-emerald-400">&#x27;$2&#x27;</span>');
  } else {
    // react (jsx) or vue
    escaped = escaped
      // Single line comments
      .replace(/(\/\/.*)/g, '<span class="text-slate-500 italic">$1</span>')
      // Multi line comments
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-slate-500 italic">$1</span>')
      // JSX Comments {/* ... */}
      .replace(/(\{\/\*[\s\S]*?\*\/\})/g, '<span class="text-slate-500 italic">$1</span>')
      // JS Keywords
      .replace(/\b(const|let|var|function|return|export|default|import|from|true|false|as|if|else|for|while|class|className|useState|useEffect|useMemo|useCallback|useRef|useContext|useReducer)\b/g, '<span class="text-pink-400 font-medium">$1</span>')
      // JS Strings
      .replace(/(&quot;[\s\S]*?&quot;)/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(&#x27;[\s\S]*?&#x27;)/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(`[\s\S]*?`)/g, '<span class="text-emerald-400">$1</span>')
      // React Component Names
      .replace(/\b([A-Z]\w*)\b(?=[\s&lt;{/])/g, '<span class="text-amber-300 font-semibold">$1</span>')
      // Tailwind CSS Classes / JSX properties
      .replace(/([\w-]+)=/g, '<span class="text-sky-400">$1</span>=')
      // HTML Tag tags in JSX
      .replace(/(&lt;\/?)([a-z][a-z0-9]*)/g, '$1<span class="text-indigo-400 font-semibold">$2</span>');
  }
  return escaped;
};

export default function App() {
  const [catalog, setCatalog] = useState([]);
  const [loadingCatalog, setLoadingCatalog] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);
  
  // Selection States
  const [selectedVersion, setSelectedVersion] = useState('v4');
  const [selectedFlavor, setSelectedFlavor] = useState('html');
  const [selectedTheme, setSelectedTheme] = useState('light');
  
  // Viewer States
  const [viewMode, setViewMode] = useState('preview'); // 'preview' | 'code'
  const [viewportWidth, setViewportWidth] = useState('100%'); // '100%' | '1024px' | '768px' | '375px'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('All'); // 'All' | 'Application UI' | 'Ecommerce' | 'Marketing'
  
  // Sidebar Accordion states
  const [expandedCategories, setExpandedCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('portal_expanded_cats');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedSubcategories, setExpandedSubcategories] = useState(() => {
    try {
      const saved = localStorage.getItem('portal_expanded_subcats');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save accordion states to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('portal_expanded_cats', JSON.stringify(expandedCategories));
    } catch (err) {
      console.warn('localStorage.setItem is disabled or sandboxed:', err);
    }
  }, [expandedCategories]);

  useEffect(() => {
    try {
      localStorage.setItem('portal_expanded_subcats', JSON.stringify(expandedSubcategories));
    } catch (err) {
      console.warn('localStorage.setItem is disabled or sandboxed:', err);
    }
  }, [expandedSubcategories]);
  
  // Code loading states
  const [codeContent, setCodeContent] = useState('');
  const [loadingCode, setLoadingCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);
  
  // HTML Preview raw state (always loads HTML even if user is viewing react/vue code)
  const [htmlPreviewContent, setHtmlPreviewContent] = useState('');
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  
  // Portal Styles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [portalDarkMode, setPortalDarkMode] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Configurable absolute path root for multi-OS support
  const [projectRoot, setProjectRoot] = useState(() => {
    try {
      const saved = localStorage.getItem('portal_project_root');
      if (saved) return saved;
    } catch {}
    const isWin = typeof window !== 'undefined' && 
      (window.navigator.userAgent.includes('Windows') || window.navigator.platform.includes('Win'));
    return isWin ? 'E:\\PROJECT\\twp-components' : '/home/user/PROJECT/twp-components';
  });
  const [isEditingRoot, setIsEditingRoot] = useState(false);
  const [rootInputVal, setRootInputVal] = useState(projectRoot);

  const searchInputRef = useRef(null);
  const fileCache = useRef({});

  // Command Palette states & hooks
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteSearch, setPaletteSearch] = useState('');
  const [paletteSelectedIndex, setPaletteSelectedIndex] = useState(0);
  const paletteInputRef = useRef(null);

  const paletteResults = useMemo(() => {
    if (!paletteSearch.trim()) return catalog.slice(0, 10);
    const query = paletteSearch.toLowerCase();
    return catalog.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.subcategory.toLowerCase().includes(query)
    );
  }, [catalog, paletteSearch]);

  useEffect(() => {
    setPaletteSelectedIndex(0);
  }, [paletteSearch]);

  useEffect(() => {
    if (isPaletteOpen) {
      setTimeout(() => {
        paletteInputRef.current?.focus();
      }, 50);
    }
  }, [isPaletteOpen]);

  const handlePaletteKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setPaletteSelectedIndex(prev => (prev + 1) % paletteResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setPaletteSelectedIndex(prev => (prev - 1 + paletteResults.length) % paletteResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (paletteResults[paletteSelectedIndex]) {
        setSelectedComponent(paletteResults[paletteSelectedIndex]);
        setIsPaletteOpen(false);
        setPaletteSearch('');
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsPaletteOpen(false);
      setPaletteSearch('');
    }
  };

  // Viewport drag-to-resize states & handlers
  const [isDragging, setIsDragging] = useState(false);
  const viewportContainerRef = useRef(null);

  const handleMouseDown = (e, direction) => {
    e.preventDefault();
    setIsDragging(true);
    
    const startX = e.clientX;
    const containerWidth = viewportContainerRef.current ? viewportContainerRef.current.clientWidth : 800;
    let initialWidth = 0;
    
    if (viewportWidth === '100%') {
      initialWidth = containerWidth;
    } else {
      initialWidth = parseInt(viewportWidth, 10);
    }
    
    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      let newWidth = direction === 'right' 
        ? initialWidth + deltaX * 2 
        : initialWidth - deltaX * 2;
      
      const minWidth = 320;
      const maxWidth = containerWidth - 48;
      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;
      
      setViewportWidth(`${newWidth}px`);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Load catalog on mount
  useEffect(() => {
    fetch('/components-catalog.json')
      .then(res => {
        if (!res.ok) throw new Error('Catalog not found');
        return res.json();
      })
      .then(data => {
        setCatalog(data);
        setLoadingCatalog(false);
        if (data.length > 0) {
          // Select first component by default
          setSelectedComponent(data[0]);
        }
      })
      .catch(err => {
        console.error('Failed to load catalog', err);
        setLoadingCatalog(false);
      });
  }, []);

  // Keyboard shortcuts (Ctrl+K to search, Ctrl+B to toggle sidebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle selected component default theme/version/flavor initialization
  useEffect(() => {
    if (!selectedComponent) return;

    // Reset theme, flavor and version to what is actually available
    const versions = selectedComponent.versions;
    let version = selectedVersion;
    if (!versions.includes(version)) {
      version = versions[0] || 'v4';
      setSelectedVersion(version);
    }

    const versionFiles = selectedComponent.files[version];
    const availableFlavors = Object.keys(versionFiles).filter(f => versionFiles[f].length > 0);
    let flavor = selectedFlavor;
    if (!availableFlavors.includes(flavor)) {
      flavor = availableFlavors[0] || 'html';
      setSelectedFlavor(flavor);
    }

    const availableThemes = versionFiles[flavor];
    let theme = selectedTheme;
    if (!availableThemes.includes(theme)) {
      theme = availableThemes[0] || 'light';
      setSelectedTheme(theme);
    }
  }, [selectedComponent]);

  // Load Code Content with Caching & Default Theme Suffix support
  useEffect(() => {
    if (!selectedComponent) return;
    const ext = getFileExtension(selectedFlavor);
    const themeSuffix = selectedTheme === 'default' ? '' : `-${selectedTheme}`;
    const path = `${selectedComponent.relativePath}/${selectedVersion}/${selectedFlavor}${themeSuffix}.${ext}`;
    const url = `/raw-components/${path}`;

    if (fileCache.current[url]) {
      setCodeContent(fileCache.current[url]);
      setLoadingCode(false);
      return;
    }

    setLoadingCode(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Code not found');
        return res.text();
      })
      .then(text => {
        fileCache.current[url] = text;
        setCodeContent(text);
        setLoadingCode(false);
      })
      .catch(err => {
        console.error(err);
        setCodeContent(`// Error loading file: ${err.message}\n// Path: ${path}`);
        setLoadingCode(false);
      });
  }, [selectedComponent, selectedVersion, selectedFlavor, selectedTheme]);

  // Load HTML Preview Content with Caching & Default Theme Suffix support
  useEffect(() => {
    if (!selectedComponent) return;
    
    // We want the html flavor
    const versions = selectedComponent.versions;
    const version = versions.includes(selectedVersion) ? selectedVersion : (versions[0] || 'v4');
    const versionFiles = selectedComponent.files[version];
    
    if (!versionFiles || !versionFiles.html || versionFiles.html.length === 0) {
      setHtmlPreviewContent('<div class="flex items-center justify-center h-full text-slate-400">No HTML preview available.</div>');
      return;
    }

    // Determine preview theme matching
    let previewTheme = selectedTheme;
    if (!versionFiles.html.includes(previewTheme)) {
      previewTheme = versionFiles.html[0];
    }

    const themeSuffix = previewTheme === 'default' ? '' : `-${previewTheme}`;
    const path = `${selectedComponent.relativePath}/${version}/html${themeSuffix}.html`;
    const url = `/raw-components/${path}`;

    setIframeLoaded(false);

    if (fileCache.current[url]) {
      setHtmlPreviewContent(fileCache.current[url]);
      setLoadingPreview(false);
      return;
    }

    setLoadingPreview(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Preview HTML not found');
        return res.text();
      })
      .then(text => {
        fileCache.current[url] = text;
        setHtmlPreviewContent(text);
        setLoadingPreview(false);
      })
      .catch(err => {
        console.error(err);
        setHtmlPreviewContent(`<div class="flex items-center justify-center h-full text-red-400">Error loading preview: ${err.message}</div>`);
        setLoadingPreview(false);
      });
  }, [selectedComponent, selectedVersion, selectedTheme]);

  // Expand categories containing search results automatically
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const cats = {};
      const subcats = {};
      filteredCatalog.forEach(item => {
        cats[item.category] = true;
        subcats[`${item.category}-${item.subcategory}`] = true;
      });
      setExpandedCategories(cats);
      setExpandedSubcategories(subcats);
    }
  }, [searchQuery]);

  // Filter Catalog
  const filteredCatalog = useMemo(() => {
    let result = catalog;

    // Filter by Section Tab
    if (selectedSection !== 'All') {
      result = result.filter(item => item.section === selectedSection);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query)
      );
    }

    return result;
  }, [catalog, selectedSection, searchQuery]);

  // Grouped Catalog for Sidebar
  const groupedCatalog = useMemo(() => {
    const sections = {};
    
    filteredCatalog.forEach(item => {
      if (!sections[item.section]) {
        sections[item.section] = {};
      }
      if (!sections[item.section][item.category]) {
        sections[item.section][item.category] = {};
      }
      if (!sections[item.section][item.category][item.subcategory]) {
        sections[item.section][item.category][item.subcategory] = [];
      }
      sections[item.section][item.category][item.subcategory].push(item);
    });

    return sections;
  }, [filteredCatalog]);

  const toggleCategory = (cat) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleSubcategory = (catSub) => {
    setExpandedSubcategories(prev => ({ ...prev, [catSub]: !prev[catSub] }));
  };

  // Get total count of components in a category/subcategory
  const getCategoryCount = (section, category) => {
    return catalog.filter(item => item.section === section && item.category === category).length;
  };

  const getSubcategoryCount = (section, category, subcategory) => {
    return catalog.filter(item => item.section === section && item.category === category && item.subcategory === subcategory).length;
  };

  // Copy Code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Copy Path
  const getComponentFilePath = (isFull = false) => {
    if (!selectedComponent) return '';
    const ext = getFileExtension(selectedFlavor);
    const themeSuffix = selectedTheme === 'default' ? '' : `-${selectedTheme}`;
    
    // Determine OS-specific separator dynamically
    const isWin = typeof window !== 'undefined' && 
      (window.navigator.userAgent.includes('Windows') || window.navigator.platform.includes('Win'));
    const separator = isWin ? '\\' : '/';
    
    const relative = `${selectedComponent.relativePath}/${selectedVersion}/${selectedFlavor}${themeSuffix}.${ext}`
      .replace(/\//g, separator);
      
    if (isFull) {
      const base = projectRoot.endsWith(separator) ? projectRoot : projectRoot + separator;
      return `${base}${relative}`;
    }
    return relative;
  };

  const handleCopyPath = (isFull = false) => {
    navigator.clipboard.writeText(getComponentFilePath(isFull));
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  // Iframe Injection Template
  const iframeSrcDoc = useMemo(() => {
    if (!htmlPreviewContent) return '';
    
    // Set appropriate document background and text color based on component theme
    const darkClass = selectedTheme === 'dark' ? 'dark bg-slate-900 text-slate-100' : 'bg-white text-slate-900';
    
    return `
      <!DOCTYPE html>
      <html class="h-full ${selectedTheme === 'dark' ? 'dark' : ''}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Play CDN for Tailwind CSS v4 -->
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <!-- Tailwind Plus Elements module -->
        <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script>
        <style>
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: ui-sans-serif, system-ui, sans-serif;
            transition: background-color 0.2s, color 0.2s;
          }
          /* Subtle custom styling inside iframe */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(100, 116, 139, 0.15);
            border-radius: 9999px;
          }
          .dark ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.12);
          }
        </style>
      </head>
      <body class="h-full ${darkClass}">
        ${htmlPreviewContent}
        <script>
          // Prevent iframe link navigation and form submission to stay on same component page
          document.addEventListener('click', function(e) {
            const anchor = e.target.closest('a');
            if (anchor) {
              e.preventDefault();
            }
          });
          document.addEventListener('submit', function(e) {
            e.preventDefault();
          });
        </script>
      </body>
      </html>
    `;
  }, [htmlPreviewContent, selectedTheme]);

  return (
    <div className={`h-screen flex overflow-hidden ${
      portalDarkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900'
    }`}>
      
      {/* LEFT SIDEBAR (Desktop) */}
      <aside className={`hidden lg:flex lg:flex-col shrink-0 border-r ${
        portalDarkMode ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white/80 border-slate-200'
      } backdrop-blur-md transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-0 opacity-0 overflow-hidden border-r-0' : 'w-80'
      }`}>
        
        {/* Brand Header */}
        <div className={`p-5 flex items-center gap-3 border-b ${portalDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-600 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="font-display font-bold text-sm tracking-wide uppercase text-indigo-500">Tailwind Plus</h1>
            <p className={`text-xs ${portalDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Component Portal <span className="ml-1 px-1.5 py-0.5 rounded-full bg-slate-800 text-[10px] text-indigo-400 font-semibold">{catalog.length}</span>
            </p>
          </div>
        </div>

        {/* Section Quick Filters */}
        <div className={`p-4 border-b ${portalDarkMode ? 'border-slate-800' : 'border-slate-100'} space-y-2`}>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] font-medium">
            {['All', 'Application UI', 'Ecommerce', 'Marketing'].map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`py-1.5 px-2 rounded-md border text-center transition-all ${
                  selectedSection === sec 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm shadow-indigo-600/20'
                    : portalDarkMode 
                      ? 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                      : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {sec === 'Application UI' ? 'App UI' : sec}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Tree Explorer */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-4">
          {loadingCatalog ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="h-9 w-full bg-slate-800 animate-pulse rounded-md opacity-40" />
              ))}
            </div>
          ) : (
            Object.keys(groupedCatalog).map((sectionName) => (
              <div key={sectionName} className="space-y-3">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 px-1 mt-2">
                  <Layers className="w-3 h-3 text-slate-500" />
                  {sectionName}
                </div>
                
                <div className="space-y-1">
                  {Object.keys(groupedCatalog[sectionName]).map((categoryName) => {
                    const isCatExpanded = expandedCategories[categoryName];
                    const catCount = getCategoryCount(sectionName, categoryName);
                    
                    return (
                      <div key={categoryName} className="space-y-0.5">
                        {/* Category Row */}
                        <button
                          onClick={() => toggleCategory(categoryName)}
                          className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md text-xs font-semibold tracking-wide ${
                            portalDarkMode 
                              ? 'text-slate-300 hover:bg-slate-800/60 hover:text-white' 
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                          } transition-colors`}
                        >
                          <span className="truncate flex items-center gap-1.5">
                            <ChevronRight className={`w-3.5 h-3.5 text-slate-500 shrink-0 transition-transform duration-200 ${isCatExpanded ? 'rotate-90' : ''}`} />
                            {categoryName}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${portalDarkMode ? 'bg-slate-950/60 text-slate-500' : 'bg-slate-100 text-slate-500'}`}>
                            {catCount}
                          </span>
                        </button>

                        {/* Subcategories (Expanded) */}
                        <div 
                          className="grid transition-all duration-300 ease-in-out"
                          style={{
                            gridTemplateRows: isCatExpanded ? '1fr' : '0fr',
                            opacity: isCatExpanded ? 1 : 0,
                            visibility: isCatExpanded ? 'visible' : 'hidden'
                          }}
                        >
                          <div className="overflow-hidden pl-3 ml-2 border-l border-slate-800 space-y-0.5 mt-0.5">
                            {Object.keys(groupedCatalog[sectionName][categoryName]).map((subcategoryName) => {
                              const subcatKey = `${categoryName}-${subcategoryName}`;
                              const isSubcatExpanded = expandedSubcategories[subcatKey];
                              const subcatCount = getSubcategoryCount(sectionName, categoryName, subcategoryName);
                              
                              return (
                                <div key={subcategoryName} className="space-y-0.5">
                                  {/* Subcategory Row */}
                                  <button
                                    onClick={() => toggleSubcategory(subcatKey)}
                                    className={`w-full flex items-center justify-between py-1.5 px-2 rounded-md text-[11px] font-medium ${
                                      portalDarkMode
                                        ? 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    } transition-colors`}
                                  >
                                    <span className="truncate flex items-center gap-1">
                                      <ChevronRight className={`w-3 h-3 text-slate-650 shrink-0 transition-transform duration-200 ${isSubcatExpanded ? 'rotate-90' : ''}`} />
                                      {subcategoryName}
                                    </span>
                                    <span className="text-[9px] text-slate-600">
                                      {subcatCount}
                                    </span>
                                  </button>

                                  {/* Component Items (Expanded) */}
                                  <div 
                                    className="grid transition-all duration-350 ease-in-out"
                                    style={{
                                      gridTemplateRows: isSubcatExpanded ? '1fr' : '0fr',
                                      opacity: isSubcatExpanded ? 1 : 0,
                                      visibility: isSubcatExpanded ? 'visible' : 'hidden'
                                    }}
                                  >
                                    <div className="overflow-hidden pl-2 ml-1 border-l border-slate-800/60 space-y-0.5 mt-0.5">
                                      {groupedCatalog[sectionName][categoryName][subcategoryName].map((comp) => {
                                        const isSelected = selectedComponent?.id === comp.id;
                                        return (
                                          <button
                                            key={comp.id}
                                            onClick={() => {
                                              setSelectedComponent(comp);
                                              setIsMobileMenuOpen(false);
                                            }}
                                            className={`w-full text-left py-1.5 px-2.5 rounded-md text-[11px] truncate flex items-center gap-1.5 group transition-all ${
                                              isSelected
                                                ? 'bg-indigo-500/10 border-l-2 border-indigo-500 text-indigo-400 font-semibold'
                                                : portalDarkMode
                                                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/20'
                                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                                            }`}
                                          >
                                            <FileCode className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400'} shrink-0`} />
                                            {comp.name}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </nav>
      </aside>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-slate-950/80 backdrop-blur-sm">
          <div className={`relative flex flex-col w-72 max-w-xs h-full p-4 border-r ${portalDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-md hover:bg-slate-800"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
            <div className="mb-4">
              <h2 className="font-display font-bold text-sm tracking-wide uppercase text-indigo-500">Tailwind Plus</h2>
              <p className="text-xs text-slate-400">Components Explorer</p>
            </div>
            
            {/* Direct copy of tree list inside Drawer */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {/* Insert Category content same as Desktop */}
              <div className="grid grid-cols-2 gap-1 mb-4 text-[11px] font-medium">
                {['All', 'Application UI', 'Ecommerce', 'Marketing'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedSection(sec)}
                    className={`py-1.5 px-2 rounded-md border text-center transition-all ${
                      selectedSection === sec 
                        ? 'bg-indigo-600 border-indigo-500 text-white'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400'
                    }`}
                  >
                    {sec}
                  </button>
                ))}
              </div>
              
              {/* Scrollable listing */}
              <div className="space-y-3">
                {Object.keys(groupedCatalog).map((sectionName) => (
                  <div key={sectionName} className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{sectionName}</div>
                    {Object.keys(groupedCatalog[sectionName]).map((categoryName) => (
                      <div key={categoryName} className="space-y-0.5">
                        <button
                          onClick={() => toggleCategory(categoryName)}
                          className="w-full flex items-center justify-between py-1.5 px-1.5 text-xs text-slate-300"
                        >
                          <span className="truncate flex items-center gap-1">
                            {expandedCategories[categoryName] ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                            {categoryName}
                          </span>
                        </button>
                        {expandedCategories[categoryName] && (
                          <div className="pl-3 border-l border-slate-800 space-y-0.5">
                            {Object.keys(groupedCatalog[sectionName][categoryName]).map((subcategoryName) => (
                              <div key={subcategoryName}>
                                <button
                                  onClick={() => toggleSubcategory(`${categoryName}-${subcategoryName}`)}
                                  className="w-full text-left py-1 text-[11px] text-slate-400"
                                >
                                  {subcategoryName}
                                </button>
                                {expandedSubcategories[`${categoryName}-${subcategoryName}`] && (
                                  <div className="pl-2 border-l border-slate-800/60 space-y-0.5">
                                    {groupedCatalog[sectionName][categoryName][subcategoryName].map((comp) => (
                                      <button
                                        key={comp.id}
                                        onClick={() => {
                                          setSelectedComponent(comp);
                                          setIsMobileMenuOpen(false);
                                        }}
                                        className={`w-full text-left py-1.5 px-2 text-[11px] rounded ${
                                          selectedComponent?.id === comp.id ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500'
                                        }`}
                                      >
                                        {comp.name}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN VIEW AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header Bar */}
        <header className={`h-16 flex items-center justify-between px-6 border-b backdrop-blur-md sticky top-0 z-20 ${
          portalDarkMode ? 'bg-slate-900/70 border-slate-800/80' : 'bg-white/80 border-slate-200'
        } shrink-0 transition-colors duration-200`}>
          
          {/* Left: Mobile Menu Trigger, Desktop Sidebar Toggle & Search */}
          <div className="flex items-center gap-3.5 flex-1 max-w-lg">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-md lg:hidden ${portalDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-650'}`}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Sidebar Toggle */}
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              title={isSidebarCollapsed ? "Expand Sidebar (Ctrl+B)" : "Collapse Sidebar (Ctrl+B)"}
              className={`hidden lg:flex p-2 rounded-lg border transition-all ${
                portalDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-black'
              }`}
            >
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSidebarCollapsed ? '' : 'rotate-180'}`} />
            </button>

            {/* Search Input Box */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                ref={searchInputRef}
                type="text"
                readOnly
                onClick={() => setIsPaletteOpen(true)}
                onFocus={(e) => { e.target.blur(); setIsPaletteOpen(true); }}
                placeholder="Search components... (Ctrl + K)"
                className={`w-full pl-9 pr-4 py-1.5 rounded-lg text-xs outline-none transition-all cursor-pointer ${
                  portalDarkMode 
                    ? 'bg-slate-950/80 border border-slate-800 text-slate-100 hover:border-slate-700' 
                    : 'bg-slate-100 border border-slate-200 text-slate-900 hover:border-slate-300'
                }`}
              />
            </div>
          </div>

          {/* Right: Dashboard Theme Toggle & GitHub/Docs info */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Atik203/tailwindcss-components"
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className={`p-2 rounded-lg border transition-colors ${
                portalDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-100 hover:text-black'
              }`}
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setPortalDarkMode(!portalDarkMode)}
              title="Toggle Dashboard Dark Mode"
              className={`p-2 rounded-lg border transition-colors ${
                portalDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-100'
              }`}
            >
              {portalDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <div className={`hidden sm:flex items-center gap-1 px-3 py-1 rounded-full border text-[10px] font-semibold ${
              portalDarkMode ? 'bg-slate-950/50 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              Senior Mode Enabled
            </div>
          </div>
        </header>

        {/* Content Viewer Panel */}
        {selectedComponent ? (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Header: Title, Breadcrumbs and Location */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-indigo-400">
                <span>{selectedComponent.section}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span>{selectedComponent.category}</span>
                <ChevronRight className="w-3 h-3 text-slate-600" />
                <span className={portalDarkMode ? 'text-slate-400' : 'text-slate-600'}>{selectedComponent.subcategory}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="font-display font-extrabold text-2xl tracking-tight leading-none">
                    {selectedComponent.name}
                  </h2>
                </div>

                {/* VS Code Open Link */}
                <a
                  href={`vscode://file/${getComponentFilePath(true).replace(/\\/g, '/')}`}
                  className="flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/10 active:scale-95 transition-all"
                  title="Open this file directly in VS Code"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in VS Code
                </a>
              </div>

              {/* Physical File Location copy banner */}
              <div className={`p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border transition-all ${
                portalDarkMode 
                  ? 'bg-slate-900/40 border-slate-850 text-slate-300' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                {isEditingRoot ? (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      localStorage.setItem('portal_project_root', rootInputVal);
                      setProjectRoot(rootInputVal);
                      setIsEditingRoot(false);
                    }}
                    className="flex-1 flex items-center gap-2"
                  >
                    <span className="text-[10px] text-slate-500 shrink-0 font-semibold uppercase">Repo Root:</span>
                    <input
                      type="text"
                      value={rootInputVal}
                      onChange={(e) => setRootInputVal(e.target.value)}
                      placeholder="Type your absolute local project root directory path..."
                      className={`flex-1 px-2.5 py-1 text-[11px] rounded outline-none border transition-all ${
                        portalDarkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 text-[10px] font-bold rounded bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRootInputVal(projectRoot);
                        setIsEditingRoot(false);
                      }}
                      className={`px-2.5 py-1 text-[10px] font-semibold rounded border ${
                        portalDarkMode 
                          ? 'border-slate-800 hover:bg-slate-800 text-slate-400' 
                          : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 truncate font-mono text-[10px] flex-1">
                    <Folder className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-slate-500 shrink-0">Path:</span>
                    <span className="truncate select-all" title={getComponentFilePath(true)}>{getComponentFilePath(true)}</span>
                    <button
                      onClick={() => {
                        setRootInputVal(projectRoot);
                        setIsEditingRoot(true);
                      }}
                      className={`p-1 rounded transition-colors ${
                        portalDarkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-black'
                      }`}
                      title="Edit project base root directory"
                    >
                      {/* Settings/Edit pencil icon */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </button>
                  </div>
                )}
                
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopyPath(false)}
                    className={`px-2 py-1 rounded text-[10px] font-medium border transition-all ${
                      portalDarkMode 
                        ? 'hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-white' 
                        : 'hover:bg-slate-100 border-slate-200 text-slate-600 hover:text-black'
                    }`}
                    title="Copy Relative Path"
                  >
                    Rel Path
                  </button>
                  <button
                    onClick={() => handleCopyPath(true)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-semibold bg-slate-850 hover:bg-slate-800 border border-slate-750 text-indigo-400 hover:text-indigo-300 transition-all"
                    title="Copy absolute disk path"
                  >
                    {copiedPath ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedPath ? 'Copied!' : 'Copy Abs'}
                  </button>
                </div>
              </div>
            </div>

            {/* CONTROLS BAR (Modes, Viewports, Theme and Code Flavors) */}
            <div className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              portalDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              {/* Left Side: View Mode Toggles & Viewport Selector */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Mode Selector */}
                {(() => {
                  const modes = ['preview', 'code'];
                  const activeIndex = modes.indexOf(viewMode);
                  return (
                    <div className={`p-0.5 rounded-lg border flex relative ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                      {activeIndex !== -1 && (
                        <div 
                          className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 ease-out ${
                            portalDarkMode ? 'bg-slate-800' : 'bg-white shadow-xs border border-slate-200/50'
                          }`}
                          style={{
                            width: `calc(50% - 4px)`,
                            left: '2px',
                            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`
                          }}
                        />
                      )}
                      <button
                        onClick={() => setViewMode('preview')}
                        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                          viewMode === 'preview'
                            ? portalDarkMode ? 'text-white' : 'text-indigo-600'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Preview
                      </button>
                      <button
                        onClick={() => setViewMode('code')}
                        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                          viewMode === 'code'
                            ? portalDarkMode ? 'text-white' : 'text-indigo-600'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <Code className="w-3.5 h-3.5" />
                        Code
                      </button>
                    </div>
                  );
                })()}

                {/* Viewport Width Controls (Only in Preview) */}
                {viewMode === 'preview' && (() => {
                  const viewports = [
                    { width: '375px', icon: Smartphone, label: 'Mobile' },
                    { width: '768px', icon: Tablet, label: 'Tablet' },
                    { width: '1024px', icon: Laptop, label: 'Laptop' },
                    { width: '100%', icon: Monitor, label: 'Desktop' }
                  ];
                  const activeIndex = viewports.findIndex(vp => vp.width === viewportWidth);
                  return (
                    <div className={`p-0.5 rounded-lg border flex items-center relative ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                      {activeIndex !== -1 && (
                        <div 
                          className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 ease-out ${
                            portalDarkMode ? 'bg-slate-800' : 'bg-white shadow-xs border border-slate-200/50'
                          }`}
                          style={{
                            width: '28px',
                            left: '2px',
                            transform: `translateX(${activeIndex * 28}px)`
                          }}
                        />
                      )}
                      {viewports.map((vp) => (
                        <button
                          key={vp.width}
                          onClick={() => setViewportWidth(vp.width)}
                          className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-md transition-all duration-200 ${
                            viewportWidth === vp.width
                              ? portalDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                          title={vp.label}
                        >
                          <vp.icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Right Side: Version, Flavor & Component Theme Selector */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Version Selector (v3 vs v4) */}
                {selectedComponent.versions.length > 1 && (() => {
                  const versions = selectedComponent.versions;
                  const activeIndex = versions.indexOf(selectedVersion);
                  return (
                    <div className={`p-0.5 rounded-lg border flex relative ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                      {activeIndex !== -1 && (
                        <div 
                          className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 ease-out ${
                            portalDarkMode ? 'bg-slate-800' : 'bg-white shadow-xs border border-slate-200/50'
                          }`}
                          style={{
                            width: `calc(${100 / versions.length}% - 4px)`,
                            left: '2px',
                            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`
                          }}
                        />
                      )}
                      {versions.map(v => (
                        <button
                          key={v}
                          onClick={() => setSelectedVersion(v)}
                          className={`relative z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all duration-200 ${
                            selectedVersion === v
                              ? portalDarkMode ? 'text-white' : 'text-indigo-600'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  );
                })()}

                {/* Flavor Selector (HTML / React / Vue) */}
                {(() => {
                  const availableFlavors = Object.keys(selectedComponent.files[selectedVersion] || {}).filter(fl => {
                    const availableThemes = selectedComponent.files[selectedVersion]?.[fl] || [];
                    return availableThemes.length > 0;
                  });
                  const activeIndex = availableFlavors.indexOf(selectedFlavor);
                  return (
                    <div className={`p-0.5 rounded-lg border flex relative ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                      {activeIndex !== -1 && (
                        <div 
                          className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 ease-out ${
                            portalDarkMode ? 'bg-slate-800' : 'bg-white shadow-xs border border-slate-200/50'
                          }`}
                          style={{
                            width: `calc(${100 / availableFlavors.length}% - 4px)`,
                            left: '2px',
                            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`
                          }}
                        />
                      )}
                      {availableFlavors.map(fl => (
                        <button
                          key={fl}
                          onClick={() => setSelectedFlavor(fl)}
                          className={`relative z-10 px-3 py-1 rounded-md text-xs font-semibold capitalize transition-all duration-200 ${
                            selectedFlavor === fl
                              ? portalDarkMode ? 'text-white' : 'text-indigo-600'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {fl === 'html' ? 'HTML' : fl === 'react' ? 'React' : 'Vue'}
                        </button>
                      ))}
                    </div>
                  );
                })()}

                {/* Theme Selector (Light / Dark / System) */}
                {(() => {
                  const availableThemes = selectedComponent.files[selectedVersion]?.[selectedFlavor] || [];
                  const activeIndex = availableThemes.indexOf(selectedTheme);
                  return (
                    <div className={`p-0.5 rounded-lg border flex relative ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                      {activeIndex !== -1 && (
                        <div 
                          className={`absolute top-0.5 bottom-0.5 rounded-md transition-all duration-300 ease-out ${
                            portalDarkMode ? 'bg-slate-800' : 'bg-white shadow-xs border border-slate-200/50'
                          }`}
                          style={{
                            width: `calc(${100 / availableThemes.length}% - 4px)`,
                            left: '2px',
                            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`
                          }}
                        />
                      )}
                      {availableThemes.map(th => (
                        <button
                          key={th}
                          onClick={() => setSelectedTheme(th)}
                          className={`relative z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all duration-200 ${
                            selectedTheme === th
                              ? portalDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                              : 'text-slate-500 hover:text-slate-350'
                          }`}
                        >
                          {th}
                        </button>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* PREVIEW CONTAINER */}
            {viewMode === 'preview' ? (
              <div className={`border rounded-xl overflow-hidden shadow-2xl flex flex-col transition-colors duration-200 ${
                portalDarkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-white'
              }`}>
                {/* Preview Frame Titlebar */}
                <div className={`px-4 py-2 border-b flex items-center justify-between text-xs font-semibold ${
                  portalDarkMode ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Viewport Preview ({viewportWidth === '100%' ? 'Responsive' : viewportWidth})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                      portalDarkMode 
                        ? 'bg-slate-800/40 text-slate-300' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      HTML Source
                    </span>
                    {loadingPreview && <RotateCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />}
                  </div>
                </div>

                {/* The Resizable Iframe Viewport */}
                <div 
                  ref={viewportContainerRef}
                  className={`flex-1 flex justify-center p-6 min-h-[500px] overflow-auto relative ${
                    selectedTheme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-150/40'
                  }`}
                >
                  <div 
                    style={{ width: viewportWidth }}
                    className={`h-[600px] bg-white rounded-lg shadow-lg border border-slate-250/20 overflow-hidden relative ${
                      isDragging ? '' : 'transition-all duration-350 ease-out'
                    }`}
                  >
                    {/* Width Indicator Tooltip (only when dragging) */}
                    {isDragging && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-slate-900/90 text-white font-mono text-[10px] z-30 shadow-md backdrop-blur-xs flex items-center gap-1 border border-slate-700 select-none pointer-events-none">
                        <span>Width:</span>
                        <span className="font-semibold text-indigo-400">
                          {viewportWidth === '100%' && viewportContainerRef.current 
                            ? `${viewportContainerRef.current.clientWidth}px` 
                            : viewportWidth}
                        </span>
                      </div>
                    )}

                    {/* Left Drag Handle */}
                    <div 
                      onMouseDown={(e) => handleMouseDown(e, 'left')}
                      className="absolute top-0 left-0 w-2.5 h-full cursor-ew-resize hover:bg-indigo-500/10 active:bg-indigo-500/20 flex items-center justify-center transition-colors group z-20"
                      title="Drag to resize viewport"
                    >
                      <div className="w-[3px] h-8 rounded-full bg-slate-300/80 group-hover:bg-indigo-400 group-active:bg-indigo-500 transition-colors" />
                    </div>

                    {/* Right Drag Handle */}
                    <div 
                      onMouseDown={(e) => handleMouseDown(e, 'right')}
                      className="absolute top-0 right-0 w-2.5 h-full cursor-ew-resize hover:bg-indigo-500/10 active:bg-indigo-500/20 flex items-center justify-center transition-colors group z-20"
                      title="Drag to resize viewport"
                    >
                      <div className="w-[3px] h-8 rounded-full bg-slate-300/80 group-hover:bg-indigo-400 group-active:bg-indigo-500 transition-colors" />
                    </div>

                    {iframeSrcDoc ? (
                      <>
                        {!iframeLoaded && (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/5 z-10 animate-pulse">
                            <RotateCw className="w-6 h-6 animate-spin text-indigo-500" />
                          </div>
                        )}
                        <iframe
                          srcDoc={iframeSrcDoc}
                          title="Component Live Preview"
                          onLoad={() => setIframeLoaded(true)}
                          className={`w-full h-full border-none bg-transparent transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'} ${isDragging ? 'pointer-events-none' : ''}`}
                          sandbox="allow-scripts allow-same-origin"
                        />
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 text-xs">
                        {loadingPreview ? 'Fetching Preview...' : 'Click preview to reload.'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* CODE BLOCK CONTAINER */
              <div className={`border rounded-xl overflow-hidden shadow-2xl flex flex-col ${
                portalDarkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-900'
              }`}>
                {/* Code block Header */}
                <div className={`px-4 py-2 border-b flex items-center justify-between text-xs font-semibold ${
                  portalDarkMode ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-800 bg-slate-900 text-slate-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="font-mono text-[11px] truncate">{getComponentFilePath(false)}</span>
                  </div>
                  
                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md active:scale-95 transition-all"
                  >
                    {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedCode ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>

                {/* Preformatted Code Content */}
                <div className="relative overflow-auto h-[500px] max-h-[600px] text-xs font-mono p-5 leading-relaxed bg-slate-950 text-slate-300">
                  {loadingCode ? (
                    <div className="space-y-3 py-4 h-full flex flex-col justify-center">
                      <div className="h-4 w-3/4 bg-slate-900 animate-pulse rounded" />
                      <div className="h-4 w-1/2 bg-slate-900 animate-pulse rounded" />
                      <div className="h-4 w-5/6 bg-slate-900 animate-pulse rounded" />
                      <div className="h-4 w-2/3 bg-slate-900 animate-pulse rounded" />
                    </div>
                  ) : (
                    <pre className="overflow-x-auto whitespace-pre font-mono scrollbar-thin h-full">
                      <code 
                        dangerouslySetInnerHTML={{ 
                          __html: highlightCode(codeContent, selectedFlavor) 
                        }} 
                      />
                    </pre>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 space-y-4">
            <Info className="w-12 h-12 text-slate-600 animate-bounce" />
            <p className="font-display font-medium text-sm">No components found. Please run scripts/generate-catalog.js first.</p>
          </div>
        )}
      </main>

      {/* Command Palette Modal */}
      {isPaletteOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => {
            setIsPaletteOpen(false);
            setPaletteSearch('');
          }}
        >
          <div 
            className={`w-full max-w-lg rounded-xl shadow-2xl border overflow-hidden flex flex-col transform transition-all duration-200 animate-in slide-in-from-top-4 ${
              portalDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className={`p-4 border-b flex items-center gap-3 ${portalDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
              <Search className="w-5 h-5 text-slate-500 shrink-0" />
              <input
                ref={paletteInputRef}
                type="text"
                value={paletteSearch}
                onChange={(e) => setPaletteSearch(e.target.value)}
                onKeyDown={handlePaletteKeyDown}
                placeholder="Search components..."
                className="w-full bg-transparent text-sm outline-none placeholder-slate-500"
              />
              <button 
                onClick={() => {
                  setIsPaletteOpen(false);
                  setPaletteSearch('');
                }}
                className="text-[10px] px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800/40 text-slate-400 select-none hover:bg-slate-800 transition-all"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-0.5">
              {paletteResults.length > 0 ? (
                paletteResults.map((comp, index) => {
                  const isSelected = index === paletteSelectedIndex;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => {
                        setSelectedComponent(comp);
                        setIsPaletteOpen(false);
                        setPaletteSearch('');
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : portalDarkMode 
                            ? 'hover:bg-slate-800/50 text-slate-300' 
                            : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileCode className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                        <span className="font-medium truncate">{comp.name}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-[9px] shrink-0 font-bold uppercase tracking-wider ${
                        isSelected ? 'text-indigo-200' : 'text-slate-500'
                      }`}>
                        <span>{comp.category}</span>
                        <span>•</span>
                        <span>{comp.subcategory}</span>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs text-slate-500">
                  No components match your search.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className={`p-3 border-t flex items-center justify-between text-[10px] text-slate-500 ${
              portalDarkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
            }`}>
              <div className="flex items-center gap-2">
                <span>↑↓ to navigate</span>
                <span>•</span>
                <span>Enter to select</span>
              </div>
              <div>
                <span>{paletteResults.length} results</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
