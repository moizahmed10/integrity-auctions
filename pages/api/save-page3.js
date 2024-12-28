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
    const { sections, action, displayPage } = req.body;

    if (!sections || !Array.isArray(sections)) {
      return res.status(400).json({ error: "Sections must be an array" });
    }
    if (!["overwrite", "append"].includes(action)) {
      return res.status(400).json({ error: "Invalid action specified" });
    }
    if (typeof displayPage !== "boolean") {
      return res.status(400).json({ error: "Display page must be a boolean" });
    }

    try {
      const pageRef = doc(db, "pages", "cxmP1K5s33scKBKs8M5S");
      const pageDoc = await getDoc(pageRef);

      const normalizedSections = sections.map((section) => ({
        heading: section.heading,
        description: section.description,
        headingFontSize: section.headingFontSize || 24,
        descriptionFontSize: section.descriptionFontSize || 16,
      }));

      if (action === "overwrite") {
        await setDoc(pageRef, { displayPage, sections: normalizedSections });
        return res
          .status(200)
          .json({ message: "Data overwritten successfully" });
      } else if (action === "append") {
        if (!pageDoc.exists()) {
          await setDoc(pageRef, { displayPage, sections: normalizedSections });
        } else {
          await updateDoc(pageRef, {
            sections: arrayUnion(...normalizedSections),
            displayPage,
          });
        }
        return res.status(200).json({ message: "Data appended successfully" });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      return res.status(500).json({ error: "Failed to save data" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
