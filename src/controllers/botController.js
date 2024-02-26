import { initializeBrowser } from "../services/browserService.js";
import { configs } from "../config/configs.js";
import * as cheerio from "cheerio";

const URL = "https://tipmanager.net/" || configs.bet365.url;

export async function scrapeData() {
  try {
    const page = await initializeBrowser();
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    /**
     * Scraping das partidas AOVIVO do https://tipmanager.net/
     */
    const dataElement = await page.locator("#__NEXT_DATA__").allInnerTexts();
    const jsonData = JSON.parse(dataElement);

    // Pegar apenas os e-Soccer

    // Pegar as todas as próximas partidas
    const nextMatches = jsonData.props.pageProps.nextMatches;

    // Pegar so E-soccer
    const listEsoccer = nextMatches.filter(
      (match) => match.sport === "e-Soccer"
    );
    console.log(listEsoccer);

    /**
     * Pegar so dados dos jogos aovivos
     */
    await page.goto(configs.bet365.url);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);

    // Clicar em e-soccer
    //Clicar em aceitar cookies
    // await page.locator("div.ccm-CookieConsentPopup_Accept").click();
    // await page.pause();
    await page.locator(".ovm-DisciplineSwitcher_Button > div").click();
    await page.getByText("E-soccer").first().click();
    await page.screenshot({ path: "printBEt.png" });

    // await page.close();
  } catch (error) {
    console.error("Ocorreu um erro durante a raspagem:", error);
  }
}
