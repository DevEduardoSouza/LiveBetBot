import { initializeBrowser } from "../services/browserService.js";
import { configs } from "../config/configs.js";
import { Match, Team } from "../models/match.js";
import * as cheerio from "cheerio";

const URL = configs.bet365.url;

export async function scrapeData() {
  try {
    const page = await initializeBrowser();
    await page.goto(URL);

    await page.waitForLoadState("networkidle");
    await page.locator(".iip-IntroductoryPopup_Cross").click();

    const elementHandles = await page.$$(
      ".ovm-Competition.ovm-Competition-open"
    );

    function name(htmlContent) {
      const $ = cheerio.load(htmlContent);

      $(".ovm-Competition.ovm-Competition-open").each((i, value) => {
        const league = $(value)
          .find(".ovm-CompetitionHeader_Name.ovm-CompetitionHeader_Name-faves")
          .text();
        const timeHome = $(value)
          .find(
            ".ovm-FixtureDetailsTwoWay_TeamsAndScoresInner > div > div:nth-child(1)"
          )
          .text();
        const timeAway = $(value)
          .find(
            ".ovm-FixtureDetailsTwoWay_TeamsAndScoresInner > div > div:nth-child(2)"
          )
          .text();

        console.log(league);
        console.log(timeHome);
        console.log(timeAway);

        console.log("\n\n");
        // Se necessário, adicione mais operações aqui
      });
    }

    for (const elementHandle of elementHandles) {
      const parteDoHtml = await page.evaluate(
        (element) => element.innerHTML,
        elementHandle
      );
      name(parteDoHtml);
    }

    await page.close();
  } catch (error) {
    console.error("Ocorreu um erro durante a raspagem:", error);
  }
}
