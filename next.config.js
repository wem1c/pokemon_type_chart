const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});

module.exports = withPWA({
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
