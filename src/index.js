import { initializeBrowser } from "./services/browserService.js";

async function name() {
  const page = await initializeBrowser();

  await page.goto("https://www.bet365.com/#/IP/B1");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(10000);

  await page.screenshot({ path: "exemplo.png" });

  await page.close();
}

// name();
