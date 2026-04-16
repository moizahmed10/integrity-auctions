const puppeteer = require("puppeteer");

const BASE = "http://localhost:3001";

(async () => {
  let passed = 0,
    failed = 0;
  const fail = (m) => {
    console.log("  ✗", m);
    failed++;
  };
  const pass = (m) => {
    console.log("  ✓", m);
    passed++;
  };

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--autoplay-policy=no-user-gesture-required"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  const errors = [];
  page.on("console", (msg) => {
    if (msg.text().includes("YouTube Player Error")) errors.push(msg.text());
  });

  // TEST 1: Home page video
  console.log("\n=== TEST 1: Home Page (/) ===");
  await page.goto(BASE + "/", { waitUntil: "networkidle2", timeout: 30000 });
  try {
    await page.waitForSelector("iframe[src*='youtube.com/embed']", {
      timeout: 15000,
    });
    pass("YouTube iframe rendered");
  } catch {
    fail("No iframe");
  }
  const src = await page
    .$eval("iframe[src*='youtube.com/embed']", (el) => el.src)
    .catch(() => "");
  src.includes("wVRHwwOgrUY")
    ? pass("Correct video ID")
    : fail("Wrong video ID: " + src);
  await new Promise((r) => setTimeout(r, 8000));
  errors.length === 0
    ? pass("No YT errors")
    : fail("YT errors: " + errors.join(", "));

  // TEST 2: /video-player
  console.log("\n=== TEST 2: /video-player ===");
  errors.length = 0;
  await page.goto(BASE + "/video-player", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  try {
    await page.waitForSelector("iframe[src*='youtube.com/embed']", {
      timeout: 15000,
    });
    pass("YouTube iframe rendered");
  } catch {
    fail("No iframe");
  }
  await new Promise((r) => setTimeout(r, 8000));
  errors.length === 0
    ? pass("No YT errors")
    : fail("YT errors: " + errors.join(", "));

  // TEST 3: /videoplayer
  console.log("\n=== TEST 3: /videoplayer ===");
  await page.goto(BASE + "/videoplayer", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 3000));
  const hasContent = await page.evaluate(
    () =>
      document.body.innerText.length > 0 ||
      document.querySelectorAll("div").length > 3,
  );
  hasContent ? pass("Content rendered") : fail("Empty page");
  const overlay = await page.$("nextjs-portal, [data-nextjs-dialog]");
  !overlay ? pass("No error overlay") : fail("Error overlay found");

  // TEST 4: /set-time
  console.log("\n=== TEST 4: /set-time ===");
  await page.goto(BASE + "/set-time", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  (await page.$("input, button")) ? pass("Form rendered") : fail("No form");

  // TEST 5: Create pages
  console.log("\n=== TEST 5: Create Pages ===");
  for (const cp of ["/create-page", "/create-page2", "/create-page3"]) {
    await page.goto(BASE + cp, { waitUntil: "networkidle2", timeout: 30000 });
    (await page.$("input, button, div"))
      ? pass(cp + " rendered")
      : fail(cp + " empty");
  }

  // TEST 6: Tab switch
  console.log("\n=== TEST 6: Tab Switch ===");
  errors.length = 0;
  await page.goto(BASE + "/", { waitUntil: "networkidle2", timeout: 30000 });
  try {
    await page.waitForSelector("iframe[src*='youtube.com/embed']", {
      timeout: 15000,
    });
  } catch {}
  await new Promise((r) => setTimeout(r, 5000));
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      value: true,
      writable: true,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      value: false,
      writable: true,
      configurable: true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await new Promise((r) => setTimeout(r, 3000));
  (await page.$("iframe[src*='youtube.com/embed']"))
    ? pass("Player survived tab switch")
    : fail("Player removed");
  errors.length === 0
    ? pass("No errors after switch")
    : fail("Errors: " + errors.join(", "));

  console.log(
    `\n=============================\nRESULTS: ${passed} passed, ${failed} failed\n=============================`,
  );
  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
