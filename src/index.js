import { scrapeData } from "./controllers/botController.js";
import {
  inicializarTelegramBot,
  enviarMensagem,
} from "./controllers/telegramBot.js";

async function main() {
  await scrapeData();
  // const bot = inicializarTelegramBot(process.env.TELEGRAM_TOKEN);

  // const formattedMessages = results ? results.map(formatMessage) : [];

  // const fullMessage = formattedMessages.join("\n\n");

  // console.log(fullMessage);

  // enviarMensagem(bot, process.env.TELEGRAM_CHAT_ID, fullMessage);
}

function formatMessage(result) {
  return `
📅 Data: ${result.data}
⚽️ Esporte: ${result.esporte}
🏆 Liga: ${result.league}
⚔️ Partida: ${result.match}
`;
}

// main();
