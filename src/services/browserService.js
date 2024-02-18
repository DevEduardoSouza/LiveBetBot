import { firefox } from "playwright";
import { userAgentGenerator } from "../utils/userAgentGenerator.js";
import { configs } from "../config/configs.js";

const extraHTTPHeaders = configs.bet365.extraHTTPHeaders;

export async function initializeBrowser() {
  const browser = await firefox.launch({ headless: true });
  const page = await browser.newPage({
    userAgent: userAgentGenerator(),
    extraHTTPHeaders,
  });

  return page;
}
