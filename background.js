chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (command === "toggle-write-mode") {
      chrome.tabs.sendMessage(tabs[0].id, { command: "toggle-write-mode" });
    } else if (command === "toggle-read-mode") {
      chrome.tabs.sendMessage(tabs[0].id, { command: "toggle-read-mode" });
    }
  });
});
