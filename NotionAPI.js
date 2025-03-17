function convertHtmlToRichText(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  let richText = [];

  function traverse(node, currentAnnotations = {}) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim() !== "") {
        richText.push({
          type: "text",
          text: { content: node.textContent },
          annotations: {
            bold: currentAnnotations.bold || false,
            italic: currentAnnotations.italic || false,
            underline: false,
            strikethrough: false,
            code: false,
            color: "default"
          }
        });
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      let newAnnotations = { ...currentAnnotations };
      if (node.tagName === "B" || node.tagName === "STRONG") {
        newAnnotations.bold = true;
      }
      if (node.tagName === "I" || node.tagName === "EM") {
        newAnnotations.italic = true;
      }
      node.childNodes.forEach((child) => traverse(child, newAnnotations));
    }
  }
  doc.body.childNodes.forEach((node) => traverse(node));
  return richText;
}

export async function appendTextToNotion(content) {
  const notionToken = "your_notion_api_token_here";
  const pageId = "your_notion_page_id_here";

  const richTextContent = content.includes("<")
    ? convertHtmlToRichText(content)
    : [
        {
          type: "text",
          text: { content: content },
          annotations: {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            code: false,
            color: "default"
          }
        }
      ];

  const payload = {
    children: [
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: richTextContent
        }
      }
    ]
  };
  const url = `https://api.notion.com/v1/blocks/${pageId}/children`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Notion API error: ${response.statusText}`);
  }
  return response.json();
}
