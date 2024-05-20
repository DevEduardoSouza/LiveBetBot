import { initializeBrowser } from "../services/browserService";

const URL = "https://www.bet365.com/#/IP/B1";

export async function scrapeData() {
  try {
    const page = await initializeBrowser();
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
  } catch (error) {
    console.error("Ocorreu um erro durante a raspagem:", error);
  }
}
