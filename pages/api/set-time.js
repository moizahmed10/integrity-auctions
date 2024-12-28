import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHGoIX0TS8a6Qb4KI_YKoj3SZnWqWTzGE",
  authDomain: "ila-app-4d690.firebaseapp.com",
  projectId: "ila-app-4d690",
  storageBucket: "ila-app-4d690.firebasestorage.app",
  messagingSenderId: "50766624696",
  appId: "1:50766624696:web:909674224a610affa1414d",
  measurementId: "G-CEZV16PP6H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
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

      // Write the data to Firestore
      const docRef = doc(db, "configurations", "RcIV3y8edFx7oxuRwI6P"); // "settings" collection, "timeSettings" document
      await setDoc(docRef, data);

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
