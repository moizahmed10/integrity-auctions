import React, { useEffect, useState } from "react";
import PageRenderer from "../../components/PageRenderer";
import styles from "./index.module.css";
const ViewPage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-page");
        if (response.ok) {
          const data = await response.json();
          setSections(data.sections);
          console.log("DAta", data);
        } else {
          console.error("Failed to fetch page data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {sections.length > 0 ? (
        <PageRenderer sections={sections} />
      ) : (
        <p>No page content available. Please create a page first.</p>
      )}
    </div>
  );
};

export default ViewPage;
