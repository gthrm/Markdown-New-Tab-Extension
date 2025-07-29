import { useLayoutEffect } from "react";
import "./App.css";

function App() {
  // Apply theme from storage on component mount
  useLayoutEffect(() => {
    // Read theme from browser storage (same as new_tab)
    browser.storage.sync.get(["theme"], (result) => {
      const currentTheme = result.theme || "theme-dark"; // Default to dark theme
      document.body.className = currentTheme;
    });
  }, []);

  return (
    <div className="popup-container">
      <div className="header">
        <h1>⚡ What's Coming Next</h1>
        <p className="subtitle">Exciting new features in development</p>
      </div>

      <div className="content">
        <div className="features-section">
          <h3>🎯 Coming Soon</h3>
          <ul className="features-list">
            <li>
              🧠 <strong>AI Smart Summaries</strong> - Instant insights
            </li>
            <li>
              🔗 <strong>Auto-linking</strong> - Connect related notes
            </li>
            <li>
              📱 <strong>Mobile sync</strong> - Access anywhere
            </li>
            <li>
              🎨 <strong>Custom themes</strong> - Personalize UI
            </li>
          </ul>
        </div>

        <div className="donate-section">
          <p>Help fund development:</p>
          <a
            href="https://buymeacoffee.com/cdroma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-yellow.png"
              alt="Buy Me A Coffee"
              className="donate-button"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
