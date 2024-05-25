"use client";
export const fetchMapData = async (data) => {
  try {
    const response = await fetch(data);
    const htmlContent = await response.text();

    // Use DOMParser to parse the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Extracting the title from the parsed HTML
    const titleTag = doc.querySelector("title");
    const extractedTitle = titleTag ? titleTag.textContent : "Title not found";

    return extractedTitle;
  } catch (error) {
    console.error("Error fetching or parsing map data:", error);
    setTitle("Error loading data");
  }
};
