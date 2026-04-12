import { getAllDisplayStatus } from "../../lib/googleSheets";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { display1, display2, display3 } = await getAllDisplayStatus();
      res.status(200).json({ display1, display2, display3 });
    } catch (error) {
      console.error("Error reading data from Google Sheets:", error);
      res.status(500).json({ error: "Failed to fetch display pages" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
