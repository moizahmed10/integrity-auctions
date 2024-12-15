const PageRenderer = ({ sections }) => (
  <div
    style={{
      border: "1px solid white",
      borderRadius: "8px",
      background: "white",
      minWidth: "800px",
      padding: "40px",
    }}
  >
    {sections.map((section, index) => (
      <div key={index}>
        <h1 style={{ fontSize: section.headingFontSize || 24, color: "black" }}>
          {section.heading}
        </h1>
        <p
          style={{
            fontSize: section.descriptionFontSize || 16,
            color: "black",
          }}
        >
          {section.description}
        </p>
      </div>
    ))}
  </div>
);

export default PageRenderer;
