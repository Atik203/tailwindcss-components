import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, Menu, X, Monitor, Smartphone, Tablet, Laptop, 
  Copy, Check, ExternalLink, Folder, Compass, ChevronDown, 
  ChevronRight, Moon, Sun, RotateCw, Eye, Code, Terminal, 
  FileCode, Layers, Info, CheckCircle2, ChevronUp
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
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubcategories, setExpandedSubcategories] = useState({});
  
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

  const searchInputRef = useRef(null);
  const fileCache = useRef({});

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
        searchInputRef.current?.focus();
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
    const relative = `${selectedComponent.relativePath}/${selectedVersion}/${selectedFlavor}${themeSuffix}.${ext}`.replace(/\//g, '\\');
    return isFull ? `E:\\PROJECT\\twp-components\\${relative}` : relative;
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
      </body>
      </html>
    `;
  }, [htmlPreviewContent, selectedTheme]);

  return (
    <div className={`h-screen flex overflow-hidden ${portalDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* LEFT SIDEBAR (Desktop) */}
      <aside className={`hidden lg:flex lg:flex-col shrink-0 border-r ${portalDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'} transition-all duration-300 ease-in-out ${
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
                            {isCatExpanded ? <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
                            {categoryName}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${portalDarkMode ? 'bg-slate-950/60 text-slate-500' : 'bg-slate-100 text-slate-500'}`}>
                            {catCount}
                          </span>
                        </button>

                        {/* Subcategories (Expanded) */}
                        {isCatExpanded && (
                          <div className="pl-3 ml-2 border-l border-slate-800 space-y-0.5 mt-0.5">
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
                                      {isSubcatExpanded ? <ChevronDown className="w-3 h-3 text-slate-600 shrink-0" /> : <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />}
                                      {subcategoryName}
                                    </span>
                                    <span className="text-[9px] text-slate-600">
                                      {subcatCount}
                                    </span>
                                  </button>

                                  {/* Component Items (Expanded) */}
                                  {isSubcatExpanded && (
                                    <div className="pl-2 ml-1 border-l border-slate-800/60 space-y-0.5 mt-0.5">
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
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
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
        <header className={`h-16 flex items-center justify-between px-6 border-b ${portalDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shrink-0 transition-colors duration-200`}>
          
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search components... (Ctrl + K)"
                className={`w-full pl-9 pr-12 py-1.5 rounded-lg text-xs outline-none transition-all ${
                  portalDarkMode 
                    ? 'bg-slate-950/80 border border-slate-800 text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50' 
                    : 'bg-slate-100 border border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 p-0.5 rounded-md hover:bg-slate-850 text-slate-500"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Dashboard Theme Toggle & GitHub/Docs info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPortalDarkMode(!portalDarkMode)}
              title="Toggle Dashboard Dark Mode"
              className={`p-2 rounded-lg border transition-colors ${
                portalDarkMode 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
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
              <div className={`p-3 rounded-lg flex items-center justify-between gap-3 text-xs border ${
                portalDarkMode 
                  ? 'bg-slate-900/40 border-slate-850 text-slate-300' 
                  : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center gap-2 truncate font-mono text-[10px]">
                  <Folder className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-500 shrink-0">Path:</span>
                  <span className="truncate select-all">{getComponentFilePath(true)}</span>
                </div>
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
                <div className={`p-0.5 rounded-lg border flex ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      viewMode === 'preview'
                        ? portalDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-indigo-600 shadow-sm border-slate-200'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      viewMode === 'code'
                        ? portalDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-indigo-600 shadow-sm border-slate-200'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5" />
                    Code
                  </button>
                </div>

                {/* Viewport Width Controls (Only in Preview) */}
                {viewMode === 'preview' && (
                  <div className={`p-0.5 rounded-lg border flex items-center gap-0.5 ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                    {[
                      { width: '375px', icon: Smartphone, label: 'Mobile' },
                      { width: '768px', icon: Tablet, label: 'Tablet' },
                      { width: '1024px', icon: Laptop, label: 'Laptop' },
                      { width: '100%', icon: Monitor, label: 'Desktop' }
                    ].map((vp) => (
                      <button
                        key={vp.width}
                        onClick={() => setViewportWidth(vp.width)}
                        className={`p-1.5 rounded-md transition-all ${
                          viewportWidth === vp.width
                            ? portalDarkMode ? 'bg-slate-800 text-indigo-400' : 'bg-white text-indigo-600 shadow-xs'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        title={vp.label}
                      >
                        <vp.icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Version, Flavor & Component Theme Selector */}
              <div className="flex flex-wrap items-center gap-3">
                
                {/* Version Selector (v3 vs v4) */}
                {selectedComponent.versions.length > 1 && (
                  <div className={`p-0.5 rounded-lg border flex ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                    {selectedComponent.versions.map(v => (
                      <button
                        key={v}
                        onClick={() => setSelectedVersion(v)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                          selectedVersion === v
                            ? portalDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-indigo-600 shadow-xs'
                            : 'text-slate-500 hover:text-slate-350'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                )}

                {/* Flavor Selector (HTML / React / Vue) */}
                <div className={`p-0.5 rounded-lg border flex ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                  {Object.keys(selectedComponent.files[selectedVersion] || {}).map(fl => {
                    const availableThemes = selectedComponent.files[selectedVersion]?.[fl] || [];
                    if (availableThemes.length === 0) return null;
                    return (
                      <button
                        key={fl}
                        onClick={() => setSelectedFlavor(fl)}
                        className={`px-3 py-1 rounded-md text-xs font-semibold capitalize transition-all ${
                          selectedFlavor === fl
                            ? portalDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-indigo-600 shadow-xs'
                            : 'text-slate-500 hover:text-slate-350'
                        }`}
                      >
                        {fl === 'html' ? 'HTML' : fl === 'react' ? 'React' : 'Vue'}
                      </button>
                    );
                  })}
                </div>

                {/* Theme Selector (Light / Dark / System) */}
                <div className={`p-0.5 rounded-lg border flex ${portalDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-100 border-slate-200'}`}>
                  {(selectedComponent.files[selectedVersion]?.[selectedFlavor] || []).map(th => (
                    <button
                      key={th}
                      onClick={() => setSelectedTheme(th)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${
                        selectedTheme === th
                          ? portalDarkMode ? 'bg-slate-800 text-indigo-400' : 'bg-white text-indigo-600 shadow-xs'
                          : 'text-slate-500 hover:text-slate-350'
                      }`}
                    >
                      {th}
                    </button>
                  ))}
                </div>
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
                    <span className="text-[10px] font-mono opacity-80 uppercase px-1.5 py-0.5 rounded bg-slate-800/40 text-slate-400">
                      HTML Source
                    </span>
                    {loadingPreview && <RotateCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />}
                  </div>
                </div>

                {/* The Resizable Iframe Viewport */}
                <div className={`flex-1 flex justify-center p-6 min-h-[500px] overflow-auto ${
                  selectedTheme === 'dark' ? 'bg-slate-900/60' : 'bg-slate-150/40'
                }`}>
                  <div 
                    style={{ width: viewportWidth }}
                    className="h-[600px] bg-white rounded-lg shadow-lg border border-slate-250/20 overflow-hidden transition-all duration-350 ease-out relative"
                  >
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
                          className={`w-full h-full border-none bg-transparent transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                          sandbox="allow-scripts"
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
    </div>
  );
}
