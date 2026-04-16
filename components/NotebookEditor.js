import React, { useState, useEffect, useRef } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Switch, FormControlLabel, IconButton, Skeleton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AddIcon from "@mui/icons-material/Add";

const BRAND = "#812d20";
const BRAND_DARK = "#6a2419";
const FONT_SIZES = [10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64];

// ─── Auto-resizing textarea ───────────────────────────────────────────────────

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
        fontSize,
        lineHeight: 1.75,
        color: "#374151",
        fontFamily: "inherit",
        padding: 0,
        margin: 0,
        display: "block",
      }}
    />
  );
}

// ─── Font size picker ─────────────────────────────────────────────────────────

function FontSizeSelect({ value, onChange, label }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#9ca3af",
          userSelect: "none",
        }}
      >
        {label}
      </span>
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 22px 3px 8px",
            border: `1.5px solid ${focused ? BRAND : "#e5e7eb"}`,
            borderRadius: 6,
            background: focused ? "#fff8f7" : "#f9fafb",
            color: "#374151",
            cursor: "pointer",
            minWidth: 62,
            outline: "none",
            transition: "border-color 0.15s, background 0.15s",
          }}
        >
          {FONT_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}px
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <svg
          style={{
            position: "absolute",
            right: 6,
            pointerEvents: "none",
            color: "#9ca3af",
          }}
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
        >
          <path d="M1 1L4 4L7 1" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

// ─── Section block ────────────────────────────────────────────────────────────

function SectionBlock({ section, onChange, onDelete, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        borderBottom: "1px solid #f3f4f6",
        transition: "background 0.15s",
        borderRadius: 8,
        marginBottom: 2,
        background: hovered ? "#fdfcfc" : "transparent",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          width: 3,
          borderRadius: 4,
          flexShrink: 0,
          backgroundColor: hovered ? BRAND : "#e5e7eb",
          transition: "background-color 0.2s ease",
          marginRight: 20,
          minHeight: "100%",
          alignSelf: "stretch",
        }}
      />

      {/* Section content */}
      <div style={{ flex: 1, paddingTop: 22, paddingBottom: 22, paddingRight: 4 }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}
        >
          {/* Section number badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: hovered ? BRAND : "#e5e7eb",
              color: hovered ? "#fff" : "#6b7280",
              fontSize: 10,
              fontWeight: 700,
              transition: "background-color 0.2s, color 0.2s",
              flexShrink: 0,
              userSelect: "none",
            }}
          >
            {index + 1}
          </span>

          {/* Font size selects */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.2s ease",
            }}
          >
            <FontSizeSelect
              label="Heading"
              value={section.headingFontSize}
              onChange={(v) => onChange(section.id, "headingFontSize", v)}
            />
            <div style={{ width: 1, height: 14, background: "#e5e7eb" }} />
            <FontSizeSelect
              label="Body"
              value={section.descriptionFontSize}
              onChange={(v) => onChange(section.id, "descriptionFontSize", v)}
            />
          </div>

          <div style={{ flex: 1 }} />

          {/* Delete button */}
          <Tooltip title="Remove section" placement="top">
            <span>
              <IconButton
                size="small"
                onClick={() => onDelete(section.id)}
                sx={{
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.2s ease",
                  color: "#ef4444",
                  "&:hover": {
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                  },
                }}
              >
                <DeleteOutlineIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </span>
          </Tooltip>
        </div>

        {/* Heading field */}
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
            color: "#111827",
            fontFamily: "inherit",
            marginBottom: 10,
            padding: 0,
            display: "block",
            boxSizing: "border-box",
            letterSpacing: "-0.01em",
          }}
        />

        {/* Body field */}
        <AutoTextarea
          value={section.description}
          onChange={(e) => onChange(section.id, "description", e.target.value)}
          placeholder="Start writing..."
          fontSize={section.descriptionFontSize}
        />
      </div>
    </div>
  );
}

// ─── Add section button ───────────────────────────────────────────────────────

function AddSectionButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: hovered ? "#fff8f7" : "transparent",
        border: `1.5px dashed ${hovered ? BRAND : "#d1d5db"}`,
        borderRadius: 8,
        padding: "12px 20px",
        cursor: "pointer",
        color: hovered ? BRAND : "#9ca3af",
        fontSize: 13,
        fontWeight: 600,
        width: "100%",
        transition: "all 0.15s ease",
        fontFamily: "inherit",
        letterSpacing: "0.01em",
      }}
    >
      <AddIcon sx={{ fontSize: 16 }} />
      Add Section
    </button>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ onAdd }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "64px 20px 48px",
        gap: 12,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          backgroundColor: "#fef2f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <ArticleOutlinedIcon sx={{ fontSize: 28, color: BRAND }} />
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 600,
          color: "#374151",
        }}
      >
        No content yet
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: "#9ca3af",
          textAlign: "center",
          maxWidth: 260,
          lineHeight: 1.5,
        }}
      >
        Add your first section to start building this page.
      </p>
      <button
        onClick={onAdd}
        style={{
          marginTop: 8,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          backgroundColor: BRAND,
          color: "white",
          border: "none",
          borderRadius: 8,
          padding: "10px 20px",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
      >
        <AddIcon sx={{ fontSize: 16 }} />
        Add First Section
      </button>
    </div>
  );
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────

function EditorSkeleton() {
  return (
    <>
      {[1, 2].map((i) => (
        <div key={i} style={{ display: "flex", marginBottom: 2 }}>
          <Skeleton variant="rounded" width={3} sx={{ mr: "20px", borderRadius: 1 }} height="auto" style={{ minHeight: 130 }} />
          <div style={{ flex: 1, paddingTop: 22, paddingBottom: 22 }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              <Skeleton variant="circular" width={22} height={22} />
              <Skeleton variant="rounded" width={80} height={22} sx={{ borderRadius: 1 }} />
              <Skeleton variant="rounded" width={80} height={22} sx={{ borderRadius: 1 }} />
            </div>
            <Skeleton variant="text" width="55%" height={28} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="100%" height={16} />
            <Skeleton variant="text" width="85%" height={16} />
            <Skeleton variant="text" width="70%" height={16} />
          </div>
        </div>
      ))}
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const NotebookEditor = ({ onSave, loading, initialData }) => {
  const [sections, setSections] = useState([]);
  const [displayPage, setDisplayPage] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const initialRef = useRef(null);

  useEffect(() => {
    if (initialData !== null) {
      const loaded = (initialData?.sections || []).map((s, i) => ({ ...s, id: i + 1 }));
      setSections(loaded);
      initialRef.current = JSON.stringify(loaded);
      if (typeof initialData?.displayPage === "boolean") {
        setDisplayPage(initialData.displayPage);
      }
    }
  }, [initialData]);

  // Track unsaved changes
  useEffect(() => {
    if (initialRef.current === null) return;
    setIsDirty(JSON.stringify(sections) !== initialRef.current);
  }, [sections]);

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
    // Mark as saved
    initialRef.current = JSON.stringify(sections);
    setIsDirty(false);
  };

  const isLoading = initialData === null;

  return (
    <div
      style={{
        backgroundColor: "#f5f4f2",
        minHeight: "100vh",
        paddingBottom: 64,
      }}
    >
      {/* ── Top toolbar ── */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left: label + unsaved dot */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#9ca3af",
            }}
          >
            Page Content
          </span>
          {isDirty && !isLoading && (
            <Tooltip title="Unsaved changes" placement="right">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: BRAND,
                  display: "inline-block",
                }}
              />
            </Tooltip>
          )}
        </div>

        <div style={{ flex: 1 }} />

        {/* Right: display toggle + save */}
        {isLoading ? (
          <>
            <Skeleton variant="rounded" width={140} height={32} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rounded" width={100} height={36} sx={{ borderRadius: 2 }} />
          </>
        ) : (
          <>
            <FormControlLabel
              control={
                <Switch
                  checked={displayPage}
                  onChange={(e) => setDisplayPage(e.target.checked)}
                  size="small"
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": { color: BRAND },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: BRAND,
                    },
                  }}
                />
              }
              label={
                <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>
                  Display Page
                </span>
              }
              style={{ margin: 0 }}
            />

            <LoadingButton
              variant="contained"
              onClick={handleSave}
              loading={loading}
              startIcon={<SaveIcon sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: BRAND,
                "&:hover": { backgroundColor: BRAND_DARK },
                textTransform: "none",
                fontWeight: 600,
                fontSize: 13,
                px: 2.5,
                py: 0.9,
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: BRAND_DARK,
                  boxShadow: "none",
                },
              }}
            >
              Save Page
            </LoadingButton>
          </>
        )}
      </div>

      {/* ── Paper card ── */}
      <div
        style={{
          maxWidth: 760,
          margin: "32px auto 0",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 12,
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07)",
            overflow: "hidden",
          }}
        >
          {/* Paper top accent stripe */}
          <div style={{ height: 3, backgroundColor: BRAND }} />

          {/* Paper body */}
          <div style={{ padding: "28px 40px 32px" }}>
            {isLoading ? (
              <EditorSkeleton />
            ) : sections.length === 0 ? (
              <EmptyState onAdd={handleAdd} />
            ) : (
              <>
                {sections.map((section, index) => (
                  <SectionBlock
                    key={section.id}
                    section={section}
                    index={index}
                    onChange={handleChange}
                    onDelete={handleDelete}
                  />
                ))}
                <AddSectionButton onClick={handleAdd} />
              </>
            )}
          </div>
        </div>

        {/* Footer hint */}
        {!isLoading && sections.length > 0 && (
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#d1d5db",
              marginTop: 16,
              letterSpacing: "0.03em",
              userSelect: "none",
            }}
          >
            {sections.length} section{sections.length !== 1 ? "s" : ""} &nbsp;·&nbsp; Changes are saved to Google Sheets
          </p>
        )}
      </div>
    </div>
  );
};

export default NotebookEditor;
