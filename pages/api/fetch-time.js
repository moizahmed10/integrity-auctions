import { getConfigData } from "../../lib/googleSheets";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await getConfigData();
      if (!data) {
        return res.status(404).json({ message: "Time settings not found." });
      }
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching time settings:", error);
      return res.status(500).json({ message: "An error occurred while fetching the settings." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
