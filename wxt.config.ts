import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    manifest_version: 3,
    name: "Markdown New Tab",
    description: "A new tab page that acts as a markdown editor for notes.",
    permissions: ["storage"],
    chrome_url_overrides: {
      newtab: "new_tab.html",
    },
    background: {
      service_worker: "background.js",
    },
    icons: {
      "48": "icons/icon48.png",
      "128": "icons/icon128.png",
    },
    browser_specific_settings: {
      gecko: {
        id: "markdown-new-tab@extension.local",
        strict_min_version: "109.0",
      },
    },
    content_security_policy: {
      extension_pages: "script-src 'self'; object-src 'self'; img-src 'self' data: https: http:;",
    },
    web_accessible_resources: [
      {
        resources: ["*.js", "*.css", "*.html"],
        matches: ["<all_urls>"],
      },
    ],
  },
});

