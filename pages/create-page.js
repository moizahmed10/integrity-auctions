import React, { useState } from "react";
import FormBuilder from "../components/FormBuilder";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { Snackbar, Alert, AlertTitle } from "@mui/material";

const CreatePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // State for Snackbar Alert
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success", // success | error
  });

  const handleSave = async (sections, action) => {
    console.log("Checking sections", sections, action);
    try {
      setLoading(true);
      const response = await fetch("/api/save-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sections: sections, action: action }),
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
        <FormBuilder onSave={handleSave} loading={loading} />
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
