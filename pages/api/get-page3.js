import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Firebase configuration
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
      const docRef = doc(db, "pages", "cxmP1K5s33scKBKs8M5S");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        res.status(200).json(docSnap.data());
      } else {
        res.status(404).json({ error: "Document not found" });
      }
    } catch (error) {
      console.error("Error reading Firestore document:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
