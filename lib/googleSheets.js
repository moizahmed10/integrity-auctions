import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
  return auth;
}

export function getSheets() {
  const auth = getAuth();
  return google.sheets({ version: "v4", auth });
}

export const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

// Sheet names for each data type
export const SHEET_NAMES = {
  PAGE1: "Page1",
  PAGE2: "Page2",
  PAGE3: "Page3",
  CONFIG: "Config",
};

// --- Page helpers ---

export async function getPageData(sheetName) {
  const sheets = getSheets();

  // Read displayPage from A2
  const metaRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A2`,
  });
  const displayPage = metaRes.data.values?.[0]?.[0] === "TRUE";

  // Read sections starting from row 2 (header in row 1) in columns B-E
  const sectionsRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!B2:E1000`,
  });

  const rows = sectionsRes.data.values || [];
  const sections = rows
    .filter((row) => row[0]) // skip empty rows
    .map((row) => ({
      heading: row[0] || "",
      description: row[1] || "",
      headingFontSize: Number(row[2]) || 24,
      descriptionFontSize: Number(row[3]) || 16,
    }));

  return { displayPage, sections };
}

export async function savePageData(sheetName, sections, displayPage, action) {
  const sheets = getSheets();

  const normalizedSections = sections.map((section) => ({
    heading: section.heading,
    description: section.description,
    headingFontSize: section.headingFontSize || 24,
    descriptionFontSize: section.descriptionFontSize || 16,
  }));

  if (action === "overwrite") {
    // Clear existing data (keep header row 1)
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A2:E1000`,
    });

    // Write displayPage + sections
    const values = normalizedSections.map((s, i) => [
      i === 0 ? String(displayPage).toUpperCase() : "",
      s.heading,
      s.description,
      s.headingFontSize,
      s.descriptionFontSize,
    ]);

    // If no sections, still write displayPage
    if (values.length === 0) {
      values.push([String(displayPage).toUpperCase(), "", "", "", ""]);
    }

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A2`,
      valueInputOption: "RAW",
      requestBody: { values },
    });
  } else if (action === "append") {
    // Check if sheet has existing data
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A2:E1000`,
    });

    const existingRows = existing.data.values || [];

    if (existingRows.length === 0) {
      // No data yet — write fresh
      const values = normalizedSections.map((s, i) => [
        i === 0 ? String(displayPage).toUpperCase() : "",
        s.heading,
        s.description,
        s.headingFontSize,
        s.descriptionFontSize,
      ]);
      if (values.length === 0) {
        values.push([String(displayPage).toUpperCase(), "", "", "", ""]);
      }
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A2`,
        valueInputOption: "RAW",
        requestBody: { values },
      });
    } else {
      // Update displayPage in A2
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A2`,
        valueInputOption: "RAW",
        requestBody: {
          values: [[String(displayPage).toUpperCase()]],
        },
      });

      // Append new sections
      const newRows = normalizedSections.map((s) => [
        "",
        s.heading,
        s.description,
        s.headingFontSize,
        s.descriptionFontSize,
      ]);

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A:E`,
        valueInputOption: "RAW",
        requestBody: { values: newRows },
      });
    }
  }
}

// --- Config helpers ---

export async function getConfigData() {
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAMES.CONFIG}!A2:D2`,
  });

  const row = res.data.values?.[0];
  if (!row) return null;

  return {
    countdownTime: row[0] || "",
    transitionTime: Number(row[1]) || 0,
    videoUrl: row[2] || "",
    loopCount: Number(row[3]) || 1,
  };
}

export async function saveConfigData(data) {
  const sheets = getSheets();

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${SHEET_NAMES.CONFIG}!A2:D2`,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          data.countdownTime,
          data.transitionTime,
          data.videoUrl,
          data.loopCount,
        ],
      ],
    },
  });
}

// --- Display status helper ---

export async function getAllDisplayStatus() {
  const sheets = getSheets();

  const ranges = [
    `${SHEET_NAMES.PAGE1}!A2`,
    `${SHEET_NAMES.PAGE2}!A2`,
    `${SHEET_NAMES.PAGE3}!A2`,
  ];

  const res = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: SPREADSHEET_ID,
    ranges,
  });

  const valueRanges = res.data.valueRanges || [];
  const display1 = valueRanges[0]?.values?.[0]?.[0] === "TRUE" || false;
  const display2 = valueRanges[1]?.values?.[0]?.[0] === "TRUE" || false;
  const display3 = valueRanges[2]?.values?.[0]?.[0] === "TRUE" || false;

  return { display1, display2, display3 };
}
