import { saveConfigData } from "../../lib/googleSheets";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { countdownTime, transitionTime, videoUrl, loopCount } = req.body;

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
      await saveConfigData({
        countdownTime,
        transitionTime: Number(transitionTime),
        videoUrl,
        loopCount: Number(loopCount),
      });
      return res.status(200).json({ message: "Settings saved successfully!" });
    } catch (error) {
      console.error("Error saving settings:", error);
      return res.status(500).json({ message: "An error occurred while saving the settings." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
