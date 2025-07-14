# Markdown New Tab Extension

A Chrome extension that replaces the new tab page with a markdown editor for taking notes.

## Features

- **Markdown Editor**: Write and preview markdown content
- **Theme Toggle**: Switch between light and dark themes
- **Keyboard Shortcuts**: 
  - `Ctrl+X` / `Cmd+X`: Switch to Write Mode
  - `Ctrl+S` / `Cmd+S`: Switch to Read Mode
- **Auto-save**: Content is automatically saved to browser storage
- **Syntax Highlighting**: Code blocks with syntax highlighting

## Development

### Package for Chrome Web Store

#### Quick Method (Recommended)

Use the included packaging script:

```bash
# Make script executable (first time only)
chmod +x package.sh

# Create the package
./package.sh
```

#### Manual Method

Create ZIP file manually:

```bash
# Create distribution package (excludes development files)
zip -r markdown-new-tab-extension.zip . -x "*.git*" "*.DS_Store*" "*node_modules*" "*.md" "*package*.json" "*package.sh"
```

The script automatically:
- ✅ Removes old packages
- ✅ Excludes development files
- ✅ Shows package contents
- ✅ Displays file size
- ✅ Confirms successful creation

## Chrome Web Store Permissions Justification

When uploading to Chrome Web Store, you'll need to provide justifications for the following permissions:

### 1. `storage` Permission

**What it does**: Allows the extension to save and retrieve user's markdown content and theme preferences.

**Store Justification Text**:
```
This permission is required to save the user's markdown notes and theme preferences locally in the browser. The extension stores:
- User's markdown content for persistence across browser sessions
- Selected theme preference (light/dark mode)
- No personal data is collected or transmitted to external servers
```

### 2. `commands` Permission

**What it does**: Enables keyboard shortcuts for switching between read/write modes.

**Store Justification Text**:
```
This permission enables keyboard shortcuts (Ctrl+X for write mode, Ctrl+S for read mode) to improve user experience and productivity. The shortcuts only function within the new tab page and do not interfere with other browser functionality.
```

### 3. `activeTab` Permission

**What it does**: Allows the background script to communicate with the new tab page for keyboard shortcuts.

**Store Justification Text**:
```
This permission allows the extension's background script to send messages to the new tab page when keyboard shortcuts are triggered. This enables seamless switching between read and write modes via hotkeys. No browsing data or personal information is accessed.
```

### 4. `chrome_url_overrides.newtab` (Host Permission)

**What it does**: Replaces the default new tab page with the extension's markdown editor.

**Store Justification Text**:
```
This permission replaces the browser's default new tab page with a markdown editor interface. This is the core functionality of the extension - providing users with a productive note-taking environment every time they open a new tab.
```

## Privacy Policy Template

```
PRIVACY POLICY

This extension does not collect, store, or transmit any personal data to external servers.

Data Storage:
- Markdown content is stored locally in your browser using Chrome's storage API
- Theme preferences are stored locally in your browser
- No data is shared with third parties
- No analytics or tracking is performed

Data Usage:
- Stored data is only used to restore your notes and preferences when you open new tabs
- Data never leaves your local browser environment

Contact: [Your Email Here]
Last Updated: [Current Date]
```

## Installation for Development

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension will replace your new tab page

## File Structure

```
├── manifest.json          # Extension configuration
├── new_tab.html           # Main HTML page
├── new_tab.js            # Main JavaScript logic
├── background.js         # Background script for commands
├── style.css             # Styles for both themes
├── icons/                # Extension icons
│   ├── icon48.png
│   └── icon128.png
└── lib/                  # External libraries
    ├── marked.min.js     # Markdown parser
    ├── highlight.min.js  # Syntax highlighting
    └── stackoverflow-dark.min.css
```

## License

[Add your license here] 