import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import theme from "./theme.js";
import { base, dest } from "./env.js";

export default defineUserConfig({
  base: `/${base}/`,
  dest,

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs",
      description: "The official documentation for the aklivity/zilla open-source project",
    },
  },
  
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      [
        "link",
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      ],
      [
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Questrial&display=swap",
          rel: "stylesheet",
        },
      ],
  ],

------
Copyright by Mr.Hope
https://theme-hope.vuejs.press/cookbook/customize/font.html#font-library

  theme,
  
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-Q2XWKQS14L',
    }),
  ],
});
