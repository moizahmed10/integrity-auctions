/**
 * Run this script ONCE to set up your Google Spreadsheet with the correct
 * sheets, headers, and sample data.
 *
 * Prerequisites:
 *   1. Create a Google Spreadsheet and copy its ID from the URL
 *   2. Create a .env.local with GOOGLE_SPREADSHEET_ID and GOOGLE_SERVICE_ACCOUNT_KEY
 *   3. Share the spreadsheet with the service account email (Editor access)
 *
 * Usage:
 *   node scripts/setup-sheet.js
 */

const { google } = require("googleapis");
const path = require("path");

// Load .env.local manually (no dotenv dependency needed)
const fs = require("fs");
const envPath = path.join(__dirname, "..", ".env.local");
if (!fs.existsSync(envPath)) {
  console.error(
    "ERROR: .env.local not found. Create it first (see .env.local.example).",
  );
  process.exit(1);
}
const envContent = fs.readFileSync(envPath, "utf-8");
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const eqIndex = trimmed.indexOf("=");
  if (eqIndex === -1) continue;
  const key = trimmed.slice(0, eqIndex);
  const value = trimmed.slice(eqIndex + 1);
  process.env[key] = value;
}

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SERVICE_ACCOUNT_KEY = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

const auth = new google.auth.GoogleAuth({
  credentials: SERVICE_ACCOUNT_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SHEET_CONFIGS = [
  {
    title: "Page1",
    headers: [
      "displayPage",
      "heading",
      "description",
      "headingFontSize",
      "descriptionFontSize",
    ],
    sampleRows: [
      [
        "TRUE",
        "Welcome to Integrity Auctions",
        "We bring transparency and trust to every auction.",
        28,
        16,
      ],
      [
        "",
        "How It Works",
        "Browse listings, place bids, and win items at great prices.",
        24,
        14,
      ],
    ],
  },
  {
    title: "Page2",
    headers: [
      "displayPage",
      "heading",
      "description",
      "headingFontSize",
      "descriptionFontSize",
    ],
    sampleRows: [
      [
        "FALSE",
        "Featured Items",
        "Check out our top picks for this week.",
        26,
        16,
      ],
      [
        "",
        "Bidding Tips",
        "Start low and bid smart to get the best deals.",
        22,
        14,
      ],
    ],
  },
  {
    title: "Page3",
    headers: [
      "displayPage",
      "heading",
      "description",
      "headingFontSize",
      "descriptionFontSize",
    ],
    sampleRows: [
      [
        "FALSE",
        "About Us",
        "Integrity Auctions has been serving customers since 2020.",
        26,
        16,
      ],
      ["", "Contact", "Reach us at support@integrityauctions.com", 22, 14],
    ],
  },
  {
    title: "Config",
    headers: ["countdownTime", "transitionTime", "videoUrl", "loopCount"],
    sampleRows: [
      ["2026-04-15T18:00:00", 5, "https://www.youtube.com/watch?v=example", 3],
    ],
  },
];

async function setup() {
  console.log("Setting up spreadsheet:", SPREADSHEET_ID);

  // 1. Get existing sheets
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId: SPREADSHEET_ID,
  });
  const existingSheets = spreadsheet.data.sheets.map((s) => ({
    title: s.properties.title,
    sheetId: s.properties.sheetId,
  }));

  console.log(
    "Existing sheets:",
    existingSheets.map((s) => s.title).join(", "),
  );

  // 2. Create missing sheets
  const requests = [];
  for (const config of SHEET_CONFIGS) {
    if (!existingSheets.find((s) => s.title === config.title)) {
      requests.push({
        addSheet: { properties: { title: config.title } },
      });
      console.log(`  Will create sheet: ${config.title}`);
    }
  }

  // Remove default "Sheet1" if our sheets are being created
  const sheet1 = existingSheets.find((s) => s.title === "Sheet1");
  if (sheet1 && SHEET_CONFIGS.every((c) => c.title !== "Sheet1")) {
    // Only delete Sheet1 after at least one other sheet exists
    requests.push({ deleteSheet: { sheetId: sheet1.sheetId } });
    console.log("  Will remove default Sheet1");
  }

  if (requests.length > 0) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: { requests },
    });
    console.log("Sheets created.");
  }

  // 3. Write headers and sample data
  for (const config of SHEET_CONFIGS) {
    const values = [config.headers, ...config.sampleRows];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${config.title}!A1`,
      valueInputOption: "RAW",
      requestBody: { values },
    });

    console.log(
      `  ${config.title}: wrote ${values.length} rows (1 header + ${config.sampleRows.length} data)`,
    );
  }

  console.log("\nDone! Your spreadsheet is ready.");
  console.log(
    `Open it at: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`,
  );
}

setup().catch((err) => {
  console.error("Setup failed:", err.message);
  process.exit(1);
});
