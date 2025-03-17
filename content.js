chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getSelectionHTML") {
    const selection = document.getSelection();
    let html = "";
    if (selection.rangeCount) {
      const container = document.createElement("div");
      for (let i = 0; i < selection.rangeCount; i++) {
        container.appendChild(selection.getRangeAt(i).cloneContents());
      }
      html = container.innerHTML;
    }
    sendResponse({ html });
  }
});
