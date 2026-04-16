import React, { useState, useEffect, useRef } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Checkbox, FormControlLabel, IconButton, Skeleton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const FONT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64];

function AutoTextarea({ value, onChange, placeholder, fontSize }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [value, fontSize]);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={1}
      style={{
        width: "100%",
        resize: "none",
        overflow: "hidden",
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: fontSize,
        lineHeight: 1.7,
        color: "#2c2c2c",
        fontFamily: "inherit",
        padding: 0,
        margin: 0,
        display: "block",
      }}
    />
  );
}

function FontSelect({ value, onChange, label }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        fontSize: 11,
        color: "#888",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {label}
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          fontSize: 11,
          padding: "2px 5px",
          border: "1px solid #e0e0e0",
          borderRadius: 4,
          background: "#fafafa",
          color: "#555",
          cursor: "pointer",
        }}
      >
        {FONT_SIZES.map((s) => (
          <option key={s} value={s}>
            {s}px
          </option>
        ))}
      </select>
    </label>
  );
}

function SectionBlock({ section, onChange, onDelete, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "20px 0",
        borderBottom: "1px solid #f0f0f0",
        position: "relative",
      }}
    >
      {/* Section index label */}
      <div
        style={{
          fontSize: 10,
          color: "#bbb",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 8,
          userSelect: "none",
        }}
      >
        Section {index + 1}
      </div>

      {/* Toolbar row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
          opacity: hovered ? 1 : 0.25,
          transition: "opacity 0.15s ease",
        }}
      >
        <FontSelect
          label="Heading:"
          value={section.headingFontSize}
          onChange={(v) => onChange(section.id, "headingFontSize", v)}
        />
        <div style={{ width: 1, height: 14, background: "#e0e0e0" }} />
        <FontSelect
          label="Body:"
          value={section.descriptionFontSize}
          onChange={(v) => onChange(section.id, "descriptionFontSize", v)}
        />
        <div style={{ flex: 1 }} />
        <IconButton
          size="small"
          onClick={() => onDelete(section.id)}
          title="Delete section"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.15s ease" }}
        >
          <DeleteOutlineIcon fontSize="small" style={{ color: "#e57373" }} />
        </IconButton>
      </div>

      {/* Heading input */}
      <input
        type="text"
        value={section.heading}
        onChange={(e) => onChange(section.id, "heading", e.target.value)}
        placeholder="Heading..."
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: section.headingFontSize,
          fontWeight: 700,
          color: "#1a1a1a",
          fontFamily: "inherit",
          marginBottom: 10,
          padding: 0,
          display: "block",
          boxSizing: "border-box",
        }}
      />

      {/* Description textarea */}
      <AutoTextarea
        value={section.description}
        onChange={(e) => onChange(section.id, "description", e.target.value)}
        placeholder="Start writing..."
        fontSize={section.descriptionFontSize}
      />
    </div>
  );
}

const NotebookEditor = ({ onSave, loading, initialData }) => {
  const [sections, setSections] = useState([]);
  const [displayPage, setDisplayPage] = useState(true);

  useEffect(() => {
    if (initialData !== null) {
      setSections(
        (initialData?.sections || []).map((s, i) => ({ ...s, id: i + 1 }))
      );
      if (typeof initialData?.displayPage === "boolean") {
        setDisplayPage(initialData.displayPage);
      }
    }
  }, [initialData]);

  const handleAdd = () => {
    setSections((prev) => [
      ...prev,
      {
        id: Date.now(),
        heading: "",
        description: "",
        headingFontSize: 24,
        descriptionFontSize: 16,
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleDelete = (id) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSave = () => {
    const clean = sections.map(({ id, ...rest }) => rest);
    onSave(clean, "overwrite", displayPage);
  };

  const isLoading = initialData === null;

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "24px 20px 48px",
      }}
    >
      {/* Top toolbar */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto 16px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {isLoading ? (
          <Skeleton variant="rounded" width={140} height={36} />
        ) : (
          <FormControlLabel
            control={
              <Checkbox
                checked={displayPage}
                onChange={(e) => setDisplayPage(e.target.checked)}
                color="primary"
                size="small"
              />
            }
            label={
              <span style={{ fontSize: 14, color: "#444" }}>Display Page</span>
            }
          />
        )}
        <div style={{ flex: 1 }} />
        {isLoading ? (
          <Skeleton variant="rounded" width={100} height={36} />
        ) : (
          <LoadingButton
            variant="contained"
            onClick={handleSave}
            loading={loading}
            size="small"
            sx={{
              backgroundColor: "#812d20",
              "&:hover": { backgroundColor: "#6a2419" },
              textTransform: "none",
              fontWeight: 600,
              fontSize: 13,
              px: 2.5,
            }}
          >
            Save Page
          </LoadingButton>
        )}
      </div>

      {/* Paper */}
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: 10,
          boxShadow: "0 2px 16px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.06)",
          padding: "36px 52px 40px",
          minHeight: 480,
          boxSizing: "border-box",
        }}
      >
        {isLoading ? (
          <>
            <Skeleton variant="text" width="40%" height={14} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="100%" height={18} />
            <Skeleton variant="text" width="90%" height={18} />
            <Skeleton variant="text" width="80%" height={18} sx={{ mb: 3 }} />
            <Skeleton variant="text" width="40%" height={14} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="50%" height={28} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="100%" height={18} />
            <Skeleton variant="text" width="85%" height={18} sx={{ mb: 3 }} />
          </>
        ) : (
          <>
            {sections.length === 0 && (
              <p
                style={{
                  color: "#ccc",
                  textAlign: "center",
                  fontSize: 15,
                  padding: "60px 0 40px",
                  margin: 0,
                  userSelect: "none",
                }}
              >
                No content yet — add a section below.
              </p>
            )}

            {sections.map((section, index) => (
              <SectionBlock
                key={section.id}
                section={section}
                index={index}
                onChange={handleChange}
                onDelete={handleDelete}
              />
            ))}

            {/* Add section button */}
            <AddSectionButton onClick={handleAdd} />
          </>
        )}
      </div>
    </div>
  );
};

function AddSectionButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: "none",
        border: `1.5px dashed ${hovered ? "#812d20" : "#ddd"}`,
        borderRadius: 6,
        padding: "10px 20px",
        cursor: "pointer",
        color: hovered ? "#812d20" : "#bbb",
        fontSize: 13,
        width: "100%",
        transition: "border-color 0.15s, color 0.15s",
        fontFamily: "inherit",
      }}
    >
      + Add Section
    </button>
  );
}

export default NotebookEditor;
