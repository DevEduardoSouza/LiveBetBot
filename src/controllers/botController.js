import { initializeBrowser } from "../services/browserService.js";
import { configs } from "../config/configs.js";

const URL = configs.bet365.url;

export async function scrapeData() {
  try {
    const page = await initializeBrowser();
    await page.goto(URL);

    await page.waitForLoadState("networkidle");
    // await page.waitForTimeout(3000);

    await page.locator(".iip-IntroductoryPopup_Cross").click();

    // Todos os nomes das ligas aovivo
    const legue = await page
      .locator(".ovm-CompetitionHeader_Name.ovm-CompetitionHeader_Name-faves")
      .allTextContents();

    console.log(legue);
    // await page.pause();

    // await page.screenshot({ path: "exemplo.png" });
    // console.log("Print feito com sucesso:");

    await page.close();
  } catch (error) {
    console.error("Ocorreu um erro durante a raspagem:", error);
  }
}
