import { initializeBrowser } from "../services/browserService.js";
import { configs } from "../config/configs.js";

const URL = configs.googleMaps.url;

export async function scrapeData() {
  try {
    const page = await initializeBrowser();
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    // await page.close();
  } catch (error) {
    console.error("Ocorreu um erro durante a raspagem:", error);
  }
}
