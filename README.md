# Markdown New Tab Extension

A modern browser extension for Chrome and Firefox that replaces the new tab page with a markdown editor for note-taking. Built with **WXT Framework**, **TypeScript**, and **React**.

## ✨ Features

- **📝 Markdown Editor**: Write and preview markdown content in real-time
- **🌓 Theme Toggle**: Light and dark themes for comfortable work
- **⌨️ Keyboard Shortcuts**:
  - `Ctrl+X` / `Cmd+X`: Switch to Write Mode
  - `Ctrl+S` / `Cmd+S`: Switch to Read Mode
- **💾 Auto-save**: Content is automatically saved to browser storage
- **🎨 Syntax Highlighting**: Code blocks with syntax highlighting using highlight.js
- **📤 Export**: Export notes to markdown files with automatic naming
- **🔧 Popup Interface**: Information about upcoming features and development support
- **🦊 Cross-platform**: Support for both Chrome and Firefox

## 🚀 Tech Stack

- **[WXT Framework](https://wxt.dev/)** - Modern framework for web extension development
- **TypeScript** - Type-safe JavaScript for code reliability
- **React** - For popup interface
- **Vanilla JavaScript** - For new tab page (performance)
- **pnpm** - Fast package manager
- **Marked.js** - Markdown parser
- **Highlight.js** - Syntax highlighting

## 📦 Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (`npm install -g pnpm`)

### Project Setup

```bash
# Clone the repository
git clone https://github.com/gthrm/Markdown-New-Tab-Extension.git
cd markdown-new-tab-extension

# Install dependencies
pnpm install

# Prepare WXT
pnpm run postinstall
```

### Development

```bash
# Start development mode for Chrome
pnpm run dev

# Start development mode for Firefox
pnpm run dev:firefox

# Type checking with TypeScript
pnpm run compile
```

### Loading in Browser

#### Chrome
1. Navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked extension"
4. Select the `.output/chrome-mv3` folder from the project root

#### Firefox
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file from the `.output/firefox-mv2` folder

## 🏗️ Production Build

### Creating Builds

```bash
# Build for Chrome
pnpm run build

# Build for Firefox
pnpm run build:firefox
```

### Creating ZIP Archives for Stores

```bash
# Create ZIP for Chrome Web Store
pnpm run zip

# Create ZIP for Firefox Add-ons
pnpm run zip:firefox
```

Ready archives will be created in the `.output/` folder:
- `chrome-mv3.zip` - for Chrome Web Store
- `firefox-mv2.zip` - for Firefox Add-ons

## 📁 Project Structure

```
markdown-new-tab-extension/
├── entrypoints/                 # Extension entry points
│   ├── background.ts           # Background service worker
│   ├── new_tab/               # New tab page
│   │   ├── index.html         # HTML structure
│   │   ├── new_tab.js         # Main editor logic
│   │   └── style.css          # Styles for both themes
│   └── popup/                 # Popup interface
│       ├── App.tsx            # React popup component
│       ├── App.css            # Popup styles
│       ├── index.html         # Popup HTML
│       ├── main.tsx           # React entry point
│       └── style.css          # Base styles
├── public/                     # Static resources
│   ├── icons/                 # Extension icons
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── lib/                   # External libraries
│       ├── marked.min.js      # Markdown parser
│       ├── highlight.min.js   # Syntax highlighting
│       └── stackoverflow-dark.min.css
├── assets/                     # Development assets
├── wxt.config.ts              # WXT configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── pnpm-lock.yaml             # Package lockfile
```

## 🔒 Privacy Policy

This extension **DOES NOT collect, store, or transmit** any personal data to external servers.

### Data Storage:
- Markdown content is stored locally in your browser using Chrome Storage API
- Theme preferences are stored locally in your browser
- No data is shared with third parties
- No analytics or tracking is performed

### Data Usage:
- Stored data is only used to restore your notes and preferences when you open new tabs
- Data never leaves your local browser environment

## 🛒 Chrome Web Store Permissions

When uploading to Chrome Web Store, you'll need to provide justifications for the following permissions:

### `storage`
**Purpose**: Save user's markdown notes and theme preferences locally in the browser.

**Justification**:
```
This permission is required to save the user's markdown notes and theme preferences locally in the browser. The extension stores:
- User's markdown content for persistence across browser sessions
- Selected theme preference (light/dark mode)
- No personal data is collected or transmitted to external servers
```

### `chrome_url_overrides.newtab`
**Purpose**: Replace the default new tab page with the markdown editor.

**Justification**:
```
This permission replaces the browser's default new tab page with a markdown editor interface. This is the core functionality of the extension - providing users with a productive note-taking environment every time they open a new tab.
```

## 🤝 Roadmap

- 🧠 **AI Smart Summaries** - Automatic note summaries using AI
- 🔗 **Auto-linking** - Automatic linking of related notes
- 📱 **Mobile sync** - Synchronization with mobile devices
- 🎨 **Custom themes** - User-customizable themes
- 📂 **Folders & Tags** - Organize notes with folders and tags
- 🔍 **Search** - Full-text search across notes

## 🙏 Support Development

If you like this extension and want to support its development:

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/default-yellow.png)](https://buymeacoffee.com/cdroma)

## 📄 License

MIT License

Copyright (c) 2024 Markdown New Tab Extension

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/gthrm/Markdown-New-Tab-Extension)
- **Issues**: [Bug Reports](https://github.com/gthrm/Markdown-New-Tab-Extension/issues)
- **WXT Framework**: [Documentation](https://wxt.dev/)
