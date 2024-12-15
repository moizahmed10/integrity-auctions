import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "pageData.json");

  if (req.method === "POST") {
    const { sections, action } = req.body;

    // Validate request body
    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({ error: "Sections must be an array" });
    }
    if (!["overwrite", "append"].includes(action)) {
      return res.status(400).json({ error: "Invalid action specified" });
    }

    try {
      // Ensure the file exists
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf-8");
      }

      // Normalize sections to include default font sizes if missing
      const normalizedSections = sections.map((section) => ({
        heading: section.heading,
        description: section.description,
        headingFontSize: section.headingFontSize || 24, // Default font size for heading
        descriptionFontSize: section.descriptionFontSize || 16, // Default font size for description
      }));

      if (action === "overwrite") {
        // Overwrite the file with new data
        fs.writeFileSync(
          filePath,
          JSON.stringify(normalizedSections, null, 2),
          "utf-8"
        );
        return res
          .status(200)
          .json({ message: "File overwritten successfully" });
      } else if (action === "append") {
        // Append new data to existing file content
        const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const newData = [...existingData, ...normalizedSections];
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf-8");
        return res.status(200).json({ message: "Data appended successfully" });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    // Handle unsupported HTTP methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
