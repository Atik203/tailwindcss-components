# Tailwind CSS UI Component Portal & Sandbox

A high-performance, dark-mode first local dashboard designed to search, browse, preview, and copy offline Tailwind CSS component templates. 

This portal is a private developer workbench built to streamline front-end learning, token analysis, layout prototyping, and codebase speed.

---

> [!IMPORTANT]
> ### ⚖️ Educational Fair Use & Legal Disclaimer
> - **Purpose**: This repository is initialized strictly for **non-commercial, local self-learning, educational research, and offline analysis** of Tailwind CSS v4 patterns.
> - **IP Ownership**: All proprietary templates, layouts, and styles inside `Application UI/`, `Ecommerce/`, and `Marketing/` directories remain the exclusive property of their respective copyright holders (e.g., Tailwind Labs Inc.). 
> - **No Commercial Use**: This explorer dashboard is a personal sandbox. It does not distribute, sell, or license these components for commercial development. If you intend to use these components in production commercial applications, please support the creators by purchasing official licenses.

---

## 🚀 Key Features

* **Instant Sidebar Explorer**: Catalog tree dynamically grouped by Section $\rightarrow$ Category $\rightarrow$ Subcategory.
* **Persistent Nav Memory**: Sidebar accordions remember their open/closed states using `localStorage`—no resets on reload.
* **Zero-Flicker Viewport Preview**: Embedded responsive iframe viewports (Desktop, Laptop, Tablet, Mobile) with an opacity transition loader to eliminate browser white flashes.
* **In-Memory Dynamic Cache**: Live file content fetching is cached client-side; switching component tabs or themes is instantaneous.
* **Open in VS Code**: Integrated `vscode://` URL launcher button to open the exact file you are viewing directly in your local VS Code editor.
* **Clipboard copy integration**: Fast click-to-copy buttons for both source code snippets and absolute filesystem paths.
* **Sleek Glassmorphic Theme**: Dark-mode radial backgrounds with backdrop filters for a state-of-the-art feel.

---

## 🛠️ Technology Stack & Architecture

```
                                  [ Vite Dev Server ]
                                           │
  ┌────────────────────────────────────────┼────────────────────────────────────────┐
  │ Development (Local Dev Server)         │ Production Build (Vercel)              │
  │                                        │                                        │
  │ 1. Intercepts '/raw-components/*'      │ 1. 'npm run build' triggers Vite compile│
  │ 2. Serves files directly from the root │ 2. copy-components.js copies assets to  │
  │    as raw, uncompiled text files       │    dist/raw-components/*               │
  │ 3. Client loads code dynamically       │ 3. Static CDN serves text files directly│
  └────────────────────────────────────────┴────────────────────────────────────────┘
```

The portal runs as a lightweight SPA (Single Page Application) built with:
* **Core**: React 18 & Vite
* **Styling**: Tailwind CSS v4 & Lucide Icons
* **Compiler**: Play CDN for Tailwind browser compilation inside the sandbox preview iframe.

---

## 💻 Local Setup & Running Guide

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Generate Component Index
If you download additional files or restructure folders, rebuild the metadata index:
```bash
npm run generate-catalog
```

### 3. Start Development Server
Launch the local portal dashboard:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for Vercel Static Hosting
To compile the dashboard and bundle components into the static build target:
```bash
npm run build
```
Set Vercel's build command to `npm run build` and output directory to `dist`. The `vercel.json` file is pre-configured to handle MIME types and CORS automatically.

---

## ⌨️ Dashboard Hotkeys

* **`Ctrl + K`**: Focus the global search input.
* **`Ctrl + B`**: Toggle Sidebar collapse (ideal for full-screen shell testing).
* **`Esc`**: Close mobile drawer.
