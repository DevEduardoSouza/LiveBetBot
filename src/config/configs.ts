export const configs = {
  siteName: process.env.SITE_NAME,
  siteUrl: process.env.SITE_URL,
  siteKeywords: process.env.SITE_KEYWORDS || "test",
  siteLanguage: process.env.SITE_LANGUAGE || "pt-BR",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.3",
  },
};
