import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import LoadingButton from "@mui/lab/LoadingButton";

import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import Skeleton from "@mui/material/Skeleton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const FormBuilder = ({ onSave, loading, initialData }) => {
  const [existingSections, setExistingSections] = useState([]);
  const [newSections, setNewSections] = useState([]);
  const [input, setInput] = useState({
    heading: "",
    description: "",
    headingFontSize: 24,
    descriptionFontSize: 16,
  });
  const [action, setAction] = useState("overwrite");
  const [displayPage, setDisplayPage] = useState(true);

  useEffect(() => {
    if (initialData) {
      if (Array.isArray(initialData.sections)) setExistingSections(initialData.sections);
      if (typeof initialData.displayPage === "boolean") setDisplayPage(initialData.displayPage);
    }
  }, [initialData]);

  // What the preview shows depends on the action:
  // overwrite → only the new sections the user is building
  // append → existing + new so you can see the full result
  const previewSections = action === "overwrite"
    ? newSections
    : [...existingSections, ...newSections];

  const handleAddSection = () => {
    setNewSections([...newSections, input]);
    setInput({
      heading: "",
      description: "",
      headingFontSize: 24,
      descriptionFontSize: 16,
    });
  };

  const handleSave = () => {
    // both modes only send newSections — overwrite replaces, append adds
    onSave(newSections, action, displayPage);
  };

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

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
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
          {initialData === null ? (
            <>
              <Skeleton variant="text" width={260} height={28} sx={{ mb: "16px" }} />
              <Skeleton variant="rounded" height={24} width={140} sx={{ mb: "20px" }} />
              <Skeleton variant="rounded" height={56} sx={{ mb: "20px" }} />
              <Skeleton variant="rounded" height={56} sx={{ mb: "20px" }} />
              <Skeleton variant="text" width={140} height={20} />
              <Skeleton variant="rounded" height={36} sx={{ mb: "8px" }} />
              <Skeleton variant="text" width={160} height={20} />
              <Skeleton variant="rounded" height={36} sx={{ mb: "20px" }} />
              <Skeleton variant="rounded" height={42} sx={{ mb: "20px" }} />
              <Skeleton variant="rounded" height={80} sx={{ mb: "20px" }} />
              <Skeleton variant="rounded" height={42} />
            </>
          ) : (
            <>
              <p>Configure the content of the main page:</p>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={displayPage}
                    onChange={(e) => setDisplayPage(e.target.checked)}
                    color="primary"
                  />
                }
                label="Display Page"
              />

              <TextField
                id="outlined-basic"
                label="Heading"
                autoComplete="off"
                variant="outlined"
                value={input.heading}
                sx={{ color: "black", marginTop: "20px" }}
                onChange={(e) => setInput({ ...input, heading: e.target.value })}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                autoComplete="off"
                variant="outlined"
                sx={{ margin: "20px 0px" }}
                value={input.description}
                onChange={(e) =>
                  setInput({ ...input, description: e.target.value })
                }
              />
              <p>Heading Font Size:</p>
              <Slider
                value={input.headingFontSize}
                min={10}
                max={60}
                step={1}
                onChange={(e, newValue) =>
                  setInput({ ...input, headingFontSize: newValue })
                }
                valueLabelDisplay="auto"
              />
              <p>Description Font Size:</p>
              <Slider
                value={input.descriptionFontSize}
                min={10}
                max={50}
                step={1}
                onChange={(e, newValue) =>
                  setInput({ ...input, descriptionFontSize: newValue })
                }
                valueLabelDisplay="auto"
              />
              <Button variant="contained" onClick={handleAddSection}>
                Add Section
              </Button>
              <FormControl sx={{ margin: "20px 0px" }}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Action Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={action}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="overwrite"
                    control={<Radio />}
                    label="Overwrite the contents of the existing page"
                  />
                  <FormControlLabel
                    value="append"
                    control={<Radio />}
                    label="Append content to the existing file"
                  />
                </RadioGroup>
              </FormControl>

              <LoadingButton
                variant="contained"
                onClick={handleSave}
                disabled={newSections.length === 0}
                loading={loading}
              >
                Update Page
              </LoadingButton>
            </>
          )}
        </div>
        {newSections.length !== 0 && (
          <div
            style={{
              backgroundColor: "white",
              padding: "50px",
              border: "1px solid black",
              borderRadius: "16px",
              color: "black",
              display: "flex",
              flexDirection: "column",
              marginLeft: "50px",
              minWidth: "450px",
            }}
          >
            <p>Preview:</p>
            <ul>
              {previewSections.map((section, index) => (
                <li key={index}>
                  <h3 style={{ fontSize: section.headingFontSize }}>
                    {section.heading}
                  </h3>
                  <p style={{ fontSize: section.descriptionFontSize }}>
                    {section.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default FormBuilder;
