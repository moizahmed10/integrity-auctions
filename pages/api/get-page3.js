import { getPageData, SHEET_NAMES } from "../../lib/googleSheets";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await getPageData(SHEET_NAMES.PAGE3);
      if (!data.sections.length) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.error("Error reading Google Sheet:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
