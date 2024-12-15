import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "pageData.json");

  if (req.method === "GET") {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error("Error reading JSON file:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}