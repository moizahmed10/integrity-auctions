import { savePageData, SHEET_NAMES } from "../../lib/googleSheets";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { sections, action, displayPage } = req.body;

    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({ error: "Sections must be an array" });
    }
    if (!["overwrite", "append"].includes(action)) {
      return res.status(400).json({ error: "Invalid action specified" });
    }
    if (typeof displayPage !== "boolean") {
      return res.status(400).json({ error: "Display page must be a boolean" });
    }

    try {
      await savePageData(SHEET_NAMES.PAGE1, sections, displayPage, action);
      return res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
