import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "timeSettings.json");

  if (req.method === "POST") {
    const { countdownTime, transitionTime, videoUrl, loopCount } = req.body;

    // Validate the input fields
    if (
      !countdownTime ||
      isNaN(transitionTime) ||
      !videoUrl ||
      typeof videoUrl !== "string" ||
      !videoUrl.startsWith("http") ||
      isNaN(loopCount) ||
      loopCount <= 0
    ) {
      return res.status(400).json({
        message: "Invalid data. Please provide valid inputs for all fields.",
      });
    }

    try {
      // Prepare the data to save
      const data = {
        countdownTime,
        transitionTime: Number(transitionTime),
        videoUrl,
        loopCount: Number(loopCount),
      };

      // Write the data to the file
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
      } else {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
      }

      return res.status(200).json({ message: "Settings saved successfully!" });
    } catch (error) {
      console.error("Error saving settings:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while saving the settings." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
