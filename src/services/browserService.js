import { firefox } from "playwright";
import { userAgentGenerator } from "../utils/userAgentGenerator.js";
import { configs } from "../config/configs.js";

const extraHTTPHeaders = configs.bet365.extraHTTPHeaders;
const userAgent = userAgentGenerator();

export async function initializeBrowser() {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    extraHTTPHeaders,
  });

  return page;
}
