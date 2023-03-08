import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: `/${process.env.SITE_BASE || "zilla-docs"}/`,

  locales: {
    "/": {
      lang: "en-US",
      title: "Zilla Docs",
      description: "The official documentation for the aklivity/zilla open-source project",
    },
  },

  theme,
});
