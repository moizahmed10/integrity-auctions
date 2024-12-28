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
  if (req.method === "GET") {
    try {
      // Reference to the Firestore document
      const docRef = doc(db, "configurations", "RcIV3y8edFx7oxuRwI6P"); // "settings" collection, "timeSettings" document
      const docSnap = await getDoc(docRef);

      // Check if the document exists
      if (!docSnap.exists()) {
        return res.status(404).json({ message: "Time settings not found." });
      }

      // Send the data from Firestore
      return res.status(200).json(docSnap.data());
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
