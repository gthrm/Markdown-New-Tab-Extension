chrome.commands.onCommand.addListener(async (command) => {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (
      tab &&
      (command === "toggle-write-mode" || command === "toggle-read-mode")
    ) {
      await chrome.tabs.sendMessage(tab.id, { command: command });
    }
  } catch (error) {
    console.error("Error handling command:", error);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Markdown New Tab extension installed");
});
