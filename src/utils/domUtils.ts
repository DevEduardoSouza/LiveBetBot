import { JSDOM } from "jsdom";
import { firefox } from "playwright";

export const getHtmlPage = async (url: string) => {
  try {
    const browser = await firefox.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    await page.locator(".iip-IntroductoryPopup_Cross").click();
    await page.waitForTimeout(1000);
    await page.getByText("Aceitar todos").click();

    const html = await page.content();
    return html;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
};

export const getTextContent = (html: string, selector: string) => {
  const dom = new JSDOM(html);
  const element = dom.window.document.querySelector(selector);
  return element ? element.textContent : null;
};
