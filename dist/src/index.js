import { scrapeData } from "./controllers/botController";
async function init() {
    await scrapeData();
}
init();
