const ExcelJS = require("exceljs");
const path = require("path");

async function generate() {
  const workbook = new ExcelJS.Workbook();

  // ─── Style constants ───
  const headerFill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF2E86C1" } };
  const headerFont = { bold: true, color: { argb: "FFFFFFFF" }, size: 12 };
  const dataFont = { size: 11 };
  const borderStyle = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };

  function styleHeaders(sheet) {
    const headerRow = sheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.border = borderStyle;
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });
    headerRow.height = 24;
  }

  function styleDataRows(sheet, startRow, endRow) {
    for (let r = startRow; r <= endRow; r++) {
      const row = sheet.getRow(r);
      row.eachCell((cell) => {
        cell.font = dataFont;
        cell.border = borderStyle;
        cell.alignment = { vertical: "middle", wrapText: true };
      });
      row.height = 20;
    }
  }

  // ─── Page1 ───
  const page1 = workbook.addWorksheet("Page1", { properties: { tabColor: { argb: "FF27AE60" } } });
  page1.columns = [
    { header: "displayPage", key: "displayPage", width: 14 },
    { header: "heading", key: "heading", width: 35 },
    { header: "description", key: "description", width: 55 },
    { header: "headingFontSize", key: "headingFontSize", width: 18 },
    { header: "descriptionFontSize", key: "descriptionFontSize", width: 22 },
  ];
  page1.addRow({ displayPage: "TRUE", heading: "Welcome to Integrity Auctions", description: "We bring transparency and trust to every auction.", headingFontSize: 28, descriptionFontSize: 16 });
  page1.addRow({ displayPage: "", heading: "How It Works", description: "Browse listings, place bids, and win items at great prices.", headingFontSize: 24, descriptionFontSize: 14 });
  page1.addRow({ displayPage: "", heading: "Why Choose Us", description: "Industry-leading security, verified sellers, and guaranteed satisfaction.", headingFontSize: 24, descriptionFontSize: 14 });
  styleHeaders(page1);
  styleDataRows(page1, 2, 4);

  // ─── Page2 ───
  const page2 = workbook.addWorksheet("Page2", { properties: { tabColor: { argb: "FF2980B9" } } });
  page2.columns = [
    { header: "displayPage", key: "displayPage", width: 14 },
    { header: "heading", key: "heading", width: 35 },
    { header: "description", key: "description", width: 55 },
    { header: "headingFontSize", key: "headingFontSize", width: 18 },
    { header: "descriptionFontSize", key: "descriptionFontSize", width: 22 },
  ];
  page2.addRow({ displayPage: "FALSE", heading: "Featured Items", description: "Check out our top picks for this week.", headingFontSize: 26, descriptionFontSize: 16 });
  page2.addRow({ displayPage: "", heading: "Bidding Tips", description: "Start low and bid smart to get the best deals.", headingFontSize: 22, descriptionFontSize: 14 });
  styleHeaders(page2);
  styleDataRows(page2, 2, 3);

  // ─── Page3 ───
  const page3 = workbook.addWorksheet("Page3", { properties: { tabColor: { argb: "FF8E44AD" } } });
  page3.columns = [
    { header: "displayPage", key: "displayPage", width: 14 },
    { header: "heading", key: "heading", width: 35 },
    { header: "description", key: "description", width: 55 },
    { header: "headingFontSize", key: "headingFontSize", width: 18 },
    { header: "descriptionFontSize", key: "descriptionFontSize", width: 22 },
  ];
  page3.addRow({ displayPage: "FALSE", heading: "About Us", description: "Integrity Auctions has been serving customers since 2020.", headingFontSize: 26, descriptionFontSize: 16 });
  page3.addRow({ displayPage: "", heading: "Contact", description: "Reach us at support@integrityauctions.com", headingFontSize: 22, descriptionFontSize: 14 });
  styleHeaders(page3);
  styleDataRows(page3, 2, 3);

  // ─── Config ───
  const config = workbook.addWorksheet("Config", { properties: { tabColor: { argb: "FFE67E22" } } });
  config.columns = [
    { header: "countdownTime", key: "countdownTime", width: 25 },
    { header: "transitionTime", key: "transitionTime", width: 18 },
    { header: "videoUrl", key: "videoUrl", width: 50 },
    { header: "loopCount", key: "loopCount", width: 14 },
  ];
  config.addRow({ countdownTime: "2026-04-15T18:00:00", transitionTime: 5, videoUrl: "https://www.youtube.com/watch?v=example", loopCount: 3 });
  styleHeaders(config);
  styleDataRows(config, 2, 2);

  // ─── Save ───
  const outPath = path.join(__dirname, "..", "sample-google-sheet.xlsx");
  await workbook.xlsx.writeFile(outPath);
  console.log("Sample Excel file created:", outPath);
}

generate().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
