import { useState } from "react";
import Header from "../components/Header";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Snackbar, Alert, AlertTitle } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const SetTime = () => {
  const [countdownTime, setCountdownTime] = useState(dayjs(new Date()));
  const [transitionTime, setTransitionTime] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loopCount, setLoopCount] = useState("");

  const [error, setError] = useState({
    countdownTime: false,
    transitionTime: false,
    videoUrl: false,
    loopCount: false,
  });

  const [loading, setLoading] = useState(false);
  const [transitionTimeErrorMessage, setTransitionTimeErrorMessage] =
    useState("");
  const [countdownTimeErrorMessage, setCountdownTimeErrorMessage] =
    useState("");
  const [videoUrlErrorMessage, setVideoUrlErrorMessage] = useState("");
  const [loopCountErrorMessage, setLoopCountErrorMessage] = useState("");

  // State for Snackbar Alert
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success", // success | error
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f4f4f4",
        paper: "#ffffff",
      },
      text: {
        primary: "#000000",
      },
      primary: {
        main: "#812d20",
      },
      secondary: {
        main: "#ff4081",
      },
    },
  });

  const handleSave = async () => {
    let formValid = true;

    // Reset errors
    setError({
      countdownTime: false,
      transitionTime: false,
      videoUrl: false,
      loopCount: false,
    });
    setCountdownTimeErrorMessage("");
    setTransitionTimeErrorMessage("");
    setVideoUrlErrorMessage("");
    setLoopCountErrorMessage("");

    // Validate the countdownTime
    if (!countdownTime) {
      setError((prevError) => ({ ...prevError, countdownTime: true }));
      setCountdownTimeErrorMessage("Please select a valid date and time.");
      formValid = false;
    }

    // Validate the transitionTime
    if (transitionTime === "" || transitionTime <= 0) {
      setTransitionTimeErrorMessage(
        "Transition Time must be a positive number."
      );
      setError((prevError) => ({ ...prevError, transitionTime: true }));
      formValid = false;
    }

    // Validate the video URL
    if (!videoUrl || !videoUrl.startsWith("http")) {
      setVideoUrlErrorMessage("Please provide a valid video URL.");
      setError((prevError) => ({ ...prevError, videoUrl: true }));
      formValid = false;
    }

    // Validate the loop count
    if (loopCount === "" || loopCount <= 0) {
      setLoopCountErrorMessage("Loop count must be a positive number.");
      setError((prevError) => ({ ...prevError, loopCount: true }));
      formValid = false;
    }

    if (!formValid) return;
    setLoading(true);
    try {
      const response = await fetch("/api/set-time", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countdownTime: dayjs(countdownTime).format("YYYY-MM-DDTHH:mm"),
          transitionTime,
          videoUrl,
          loopCount,
        }),
      });

      if (response.ok) {
        setAlert({
          open: true,
          message: "Settings saved successfully!",
          severity: "success",
        });
      } else {
        const error = await response.json();
        setAlert({
          open: true,
          message: `Error: ${error.message}`,
          severity: "error",
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        message: "An error occurred while saving the settings.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Header>
      <ThemeProvider theme={lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div
            style={{
              backgroundColor: "white",
              padding: "50px",
              border: "1px solid black",
              borderRadius: "16px",
              color: "black",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ marginBottom: "20px" }}>
              Set Countdown & Transition <br />
              Time
            </h1>

            <DateTimePicker
              label="Countdown Date and Time"
              value={countdownTime}
              onChange={(value) => {
                setCountdownTime(value);
              }}
              renderInput={(props) => (
                <TextField
                  {...props}
                  error={error.countdownTime}
                  helperText={countdownTimeErrorMessage}
                />
              )}
            />

            <TextField
              sx={{ margin: "25px 0px" }}
              label="Transition Time (in seconds)"
              InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="number"
              value={transitionTime}
              onChange={(e) => setTransitionTime(e.target.value)}
              error={error.transitionTime}
              helperText={
                transitionTimeErrorMessage ||
                (error.transitionTime && "This field is required")
              }
            />

            <TextField
              sx={{ margin: "25px 0px" }}
              label="Video URL"
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              error={error.videoUrl}
              helperText={videoUrlErrorMessage}
            />

            <TextField
              sx={{ margin: "25px 0px" }}
              label="Loop Count"
              InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="number"
              value={loopCount}
              onChange={(e) => setLoopCount(e.target.value)}
              error={error.loopCount}
              helperText={loopCountErrorMessage}
            />

            <LoadingButton
              onClick={handleSave}
              variant="contained"
              disabled={
                transitionTime.length === 0 ||
                videoUrl.length === 0 ||
                loopCount.length === 0
              }
              loading={loading}
            >
              Save Time Settings
            </LoadingButton>
          </div>
        </LocalizationProvider>

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
      </ThemeProvider>
    </Header>
  );
};

export default SetTime;
