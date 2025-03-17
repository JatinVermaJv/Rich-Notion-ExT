# **Rich Notion Ext**  

**Rich Notion Ext** is a Chrome extension that lets you seamlessly send selected text (with rich formatting) from any webpage directly to your Notion workspace. Perfect for clipping articles, saving notes, or organizing research while preserving formatting like **bold**, *italics*, and more.

---

## **Features**  
- **Rich Text Support**: Preserves formatting (bold, italic, etc.) when sending text to Notion.  
- **Quick and Easy**: Right-click on any selected text and choose **Paste to Notion**.  
- **Fallback to Plain Text**: If HTML formatting is unavailable, sends plain text.  
- **Customizable**: Configure your Notion API token and page ID for personalized use.  

---

## **Installation**  

### **1. Prerequisites**  
- A **Notion account** and a **Notion API token**.  
- A **Notion page ID** where the content will be appended.  
- **Google Chrome** or any Chromium-based browser (e.g., Brave, Edge).  

### **2. Steps to Install**  
1. **Download the Extension**:  
   - Clone this repository or download the source code as a ZIP file.  
   ```bash
   git clone https://github.com/your-username/rich-notion-ext.git
   ```

2. **Load the Extension in Chrome**:  
   - Open Chrome and go to `chrome://extensions/`.  
   - Enable **Developer Mode** (toggle in the top-right corner).  
   - Click **Load unpacked** and select the folder containing the extension files.  

3. **Configure Notion API Token and Page ID**:  
   - Open the `NotionAPI.js` file in the extension folder.  
   - Replace the placeholder values for `notionToken` and `pageId` with your actual Notion API token and page ID.  
   ```javascript
   const notionToken = "your_notion_api_token_here";
   const pageId = "your_notion_page_id_here";
   ```

4. **Save and Reload**:  
   - Save the changes and reload the extension in `chrome://extensions/`.  

---

## **Usage**  

### **1. Send Text to Notion**  
1. Select any text on a webpage.  
2. Right-click and choose **Paste to Notion** from the context menu.  
3. The selected text (with formatting) will be appended to your specified Notion page.  

### **2. Demo Video**  
Watch the video below to see **Rich Notion Ext** in action:  [[Demo Video]]([assets/demo.mp4](https://drive.google.com/file/d/1l5IAONTZR2OLY2af6ZHVaYXFCUXp-apM/view?usp=sharing))    
---

## **Configuration**  

### **1. Notion API Token**  
- To get your Notion API token:  
  1. Go to [Notion's Developer Portal](https://www.notion.so/my-integrations).  
  2. Create a new integration and copy the **Internal Integration Token**.  

### **2. Notion Page ID**  
- To get your Notion page ID:  
  1. Open the Notion page where you want to append content.  
  2. Copy the URL and extract the page ID (the part after the workspace name and before any `?` or `#`).  

---
