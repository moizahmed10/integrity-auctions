import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
      // Correct usage of getDoc to read documents from Firestore
      const docRef1 = doc(db, "pages", "4SY9mIAu4jtEFcFgHPHe");
      const docRef2 = doc(db, "pages", "NsWBYZLa1QNYtukZR3z0");
      const docRef3 = doc(db, "pages", "cxmP1K5s33scKBKs8M5S");

      // Fetch the documents
      const [docSnap1, docSnap2, docSnap3] = await Promise.all([
        getDoc(docRef1),
        getDoc(docRef2),
        getDoc(docRef3),
      ]);

      // Extract the `displayPage` field from each document if it exists
      const display1 = docSnap1.exists() ? docSnap1.data().displayPage : null;
      const display2 = docSnap2.exists() ? docSnap2.data().displayPage : null;
      const display3 = docSnap3.exists() ? docSnap3.data().displayPage : null;

      // Respond with the results
      res.status(200).json({
        display1,
        display2,
        display3,
      });
    } catch (error) {
      console.error("Error reading data from Firebase:", error);
      res.status(500).json({ error: "Failed to fetch display pages" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
