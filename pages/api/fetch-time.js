import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "timeSettings.json");

  if (req.method === "GET") {
    try {
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "Time settings not found." });
      }

      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching time settings:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching the settings." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
