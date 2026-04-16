import React, { useState, useEffect } from "react";
import NotebookEditor from "../components/NotebookEditor";
import Header from "../components/Header";
import { Snackbar, Alert, AlertTitle } from "@mui/material";

const CreatePage = () => {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetch("/api/get-page")
      .then((res) => res.json())
      .then((data) => setInitialData(data))
      .catch(() => {});
  }, []);
  // State for Snackbar Alert
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success", // success | error
  });

  const handleSave = async (sections, action, displayPage) => {
    console.log("Checking sections", sections, action);
    try {
      setLoading(true);
      const response = await fetch("/api/save-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sections: sections,
          action: action,
          displayPage: displayPage,
        }),
      });

      if (response.ok) {
        setAlert({
          open: true,
          message: "Page saved successfully!",
          severity: "success",
        });
        setLoading(false);

        // Optionally, redirect after success
        // router.push("/view-page");
      } else {
        setAlert({
          open: true,
          message: "Failed to save page data.",
          severity: "error",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        open: true,
        message: "An error occurred while saving the page.",
        severity: "error",
      });
      setLoading(false);
    }
  };

  return (
    <Header>
      <div>
        <NotebookEditor onSave={handleSave} loading={loading} initialData={initialData} />
      </div>

      {/* Snackbar Alert for Success or Error */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000} // Auto-close after 6 seconds
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          <AlertTitle>
            {alert.severity === "error" ? "Error" : "Success"}
          </AlertTitle>
          {alert.message}
        </Alert>
      </Snackbar>
    </Header>
  );
};

export default CreatePage;
