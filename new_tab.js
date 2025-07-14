
const editor = document.getElementById('editor');
const themeToggler = document.getElementById('theme-toggler');

let isWriteMode = false;
let currentTheme = 'theme-dark';
let markdownContent = '';

const defaultMarkdown = `# Welcome to your Markdown New Tab!

This is a simple markdown editor that replaces your new tab page. Here are the shortcuts:

- **Cmd+X / Ctrl+X:** Switch to Write Mode
- **Cmd+S / Ctrl+S:** Switch to Read Mode

And you can use the switch in the bottom right to toggle the theme.

## Markdown Examples

### Lists

- Unordered List Item 1
- Unordered List Item 2

1. Ordered List Item 1
2. Ordered List Item 2

### Code

'''javascript
// This is a javascript code block
function greet() {
  console.log("Hello, world!");
}
'''

### Blockquotes

> This is a blockquote.
`;

function setReadMode() {
  isWriteMode = false;
  editor.contentEditable = false;
  editor.innerHTML = marked.parse(markdownContent);
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
}

function setWriteMode() {
  isWriteMode = true;
  editor.contentEditable = true;
  editor.innerHTML = ''; // Clear the rendered HTML
  editor.innerText = markdownContent; // Set the raw markdown text
  editor.focus();
}

function toggleTheme() {
  currentTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
  document.body.className = currentTheme;
  chrome.storage.sync.set({ theme: currentTheme });
}

// Main initialization logic
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['markdown', 'theme'], (result) => {
    // Set theme
    if (result.theme) {
      currentTheme = result.theme;
    }
    document.body.className = currentTheme;

    // Set content
    if (result.markdown && result.markdown.trim() !== '') {
      markdownContent = result.markdown;
    } else {
      markdownContent = defaultMarkdown;
    }

    // Set initial mode
    setReadMode();
  });
});

// Handle saving content
editor.addEventListener('keyup', () => {
  if (isWriteMode) {
    markdownContent = editor.innerText;
    chrome.storage.sync.set({ markdown: markdownContent });
  }
});

// Handle theme toggler click
themeToggler.addEventListener('click', toggleTheme);

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Use e.ctrlKey for cross-platform compatibility (works with Cmd on Mac)
  if ((e.metaKey || e.ctrlKey) && e.key === 's') {
    e.preventDefault();
    setReadMode();
  } else if ((e.metaKey || e.ctrlKey) && e.key === 'x') {
    if (!isWriteMode) {
      e.preventDefault();
      setWriteMode();
    }
  }
});
