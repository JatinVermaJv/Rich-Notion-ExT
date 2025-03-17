import { appendTextToNotion } from './NotionAPI.js';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "pasteToNotion",
    title: "Paste to Notion",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "pasteToNotion" && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "getSelectionHTML" }, (response) => {
      const content = response && response.html ? response.html : info.selectionText;
      appendTextToNotion(content)
        .then((res) => console.log("Successfully appended to Notion:", res))
        .catch((err) => console.error("Error appending to Notion:", err));
    });
  }
});
