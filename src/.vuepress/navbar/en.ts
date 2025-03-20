import { navbar } from "vuepress-theme-hope";
import { hostnameSEO, siteBase } from "../env.js";
import versions from "../versions.json" assert { type: "json" };

const versionLinks = <{ text: string; link: string }[]>versions.map((o) => ({
  text: o.text,
  icon: o.icon,
  link: o.key ? `${hostnameSEO}/${siteBase}/${o.key}` : o.link,
}));

export const enNavbar = navbar([
  {
    text: "Solutions",
    icon: "fas fa-shapes",
    activeMatch: '/solutions',
    "children": [
        {
          "text": "Secure Public Access",
          "link": "/deployment/zilla-plus-in-production/secure-public-access/README.md"
        },
        {
          "text": "Secure Private Access",
          "link": "/deployment/zilla-plus-in-production/secure-private-access/README.md"
        },
        {
          "text": "IoT Ingest & Control",
          "link": "/deployment/zilla-plus-in-production/iot-ingest-and-control/README.md"
        },
        {
          "text": "Web Streaming",
          "link": "/deployment/zilla-plus-in-production/web-streaming/README.md"
        }
      ]
  },
  {
    text: "Reference",
    icon: "fas fa-book",
    activeMatch: '/reference',
    link: "/reference/config/overview.md",
  },
  { text: "version", icon: "fas fa-list-ol", children: versionLinks },
  { text: "aklivity", icon: "fas fa-globe", link: "https://www.aklivity.io/" },
]);
