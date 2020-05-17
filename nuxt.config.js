module.exports = {
  modules: ["@nuxt/http"],
  css: ["sakura.css"],
  http: {
    baseURL: "https://real-rainy-mood.netlify.app",
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:description",
        name: "og:description",
        content: "☔ If it's not raining, you're not allowed in.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://real-rainy-mood.netlify.app/og-image.png",
      },
      {
        hid: "og:image:alt",
        name: "og:image:alt",
        content: "A rainy road through a forest.",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://real-rainy-mood.netlify.app",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  },
};
