import { themes as prismThemes } from "prism-react-renderer";
import { default as npm2yarn } from "@docusaurus/remark-plugin-npm2yarn";
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jiit Optica",
  tagline: "A place to learn and grow",
  favicon: "img/icon.png",
  url: process.env.URL || "http://localhost:3000/",
  baseUrl: "/",
 

  organizationName: "JiitOptica",
  projectName: "JiitOptica",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: "docs",
          sidebarPath: "./config/sidebars.js",
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          admonitions: {
            keywords: ["my-custom-admonition"],
            extendDefaults: true,
          },
          editUrl: "https://github.com/jiitopticachapter",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/jiitopticachapter",
          remarkPlugins: [[npm2yarn, { converters: ["pnpm"] }]],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/nav-logo.jpg",
      announcementBar: {
        id: "announcementBar",
        content: '⭐️ If you like Optica docs, give it a star on <a target="_blank" href="https://github.com/jiitopticachapter">GitHub</a>.⭐️',
        isCloseable: true,
        backgroundColor: "var(--ifm-color-primary)",
      },

      algolia: {
        apiKey: "2c1a3331ebff51f76d2f247323ee4ba4",
        indexName: "jiit-optica",
        appId: "M9BCMBK1PH",
        contextualSearch: false,
      },

      navbar: {
        title: "JIIT OPTICA",
        logo: {
          alt: "Optica Logo",
          src: "img/icon.png",
        },
        items: [
          {
            type: "dropdown",
            html: '<span class="nav-emoji">📚</span> Docs',
            position: "left",
            items: [
              {
                type: "html",
                value: `<div class="dropdown">
                <a class="dropbtn" href="/docs/"> Tutorials </a>
                <div class="dropdown-content">
                  <a href="/docs/category/html/" class="nav__icons"> <img src="/icons/html-5.svg" alt="HTML" /> </a>
                  <a href="/docs/" class="nav__icons"> <img src="/icons/css.svg" alt="CSS" /> </a>
                  <a href="/docs/category/javascript/" class="nav__icons" > <img src="/icons/js.svg" alt="JavaScript" /> </a>
                  <a href="/docs/category/react/" class="nav__icons"> <img src="/icons/jsx.svg" alt="React" /> </a>                  
                  <a href="/docs/category/typescript/" class="nav__icons"> <img src="/icons/ts.svg" alt="TypeScript" /> </a>                  
                  <a href="/docs/category/python/" class="nav__icons"> <img src="/icons/py.svg" alt="Python" /> </a>                  
                  <a href="/docs/category/java/" class="nav__icons"> <img src="/icons/java.svg" alt="Java" /> </a>                  
                </div>
              </div>`,
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                type: "html",
                value: `<div class="dropdown">
                <a class="dropbtn" href="/courses/"> Courses&nbsp; </a>
                <div class="dropdown-content">
                  <a href="/courses/category/reactjs/" class="nav__icons"> <img src="/icons/jsx.svg" alt="React" /> </a>                  
                </div>
              </div>`,
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              // {
              //   to: "/web-dev/",
              //   html: '<span class="nav-emoji">🌐</span> Web Dev',
              // },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                type: "html",
                value: `<div class="dropdown">
                <a class="dropbtn" href="/dsa/"> DSA&nbsp; </a>
                <div class="dropdown-content">
                  <a href="/dsa-problems/" class="nav__icons"> Problems </a> <br />
                  <a href="/dsa-solutions/" class="nav__icons"> Solutions </a>
                </div>
              </div>`,          
              },
            ],
          },
          {
            to: "/showcase",
            html: '<span class="nav-emoji">🌍</span> Showcase',
            position: "left",
          },
          {
            to: "/community",
            html: '<span class="nav-emoji">🤝</span> Community',
            position: "left",
          },
          {
            type: "dropdown",
            html: '<span class="nav-emoji">🏷️</span> Tags',
            position: "left",
            items: [
              {
                label: "🏷️ Tutorial Tags 📚",
                to: "/docs/tags/",
                activeBaseRegex: "/docs/tags/",
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: "🏷️ Courses Tags 🎓",
                to: "/courses/tags/",
                activeBaseRegex: "/courses/tags/",
              },
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: "🏷️ DSA Tags 🧠",
                to: "/dsa/tags/",
                activeBaseRegex: "/dsa/tags/",
              },
            ],
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/jiitopticachapter",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
        // hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: " ",
            items: [
              {
                html: `
                    <div class="footer_info--container">
                      <img src="/img/logo.png" alt="Footer logo" />
                      <span>
                      </span>
                    </div>
                  `,
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Tutorials",
                to: "/docs",
              },
              {
                label: "Courses",
                to: "/courses",
              },
              {
                label: "DSA Problems",
                to: "/dsa-problems/",
              },
              {
                label: "DSA Solutions",
                to: "/dsa-solutions/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                to: "/about/",
              },
              {
                label: "Faqs",
                to: "/community/faqs.tsx",
              },
              {
                label: "Careers",
                to: "#",
              },
              {
                label: "Team",
                to: "/community/team/",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Community",
                to: "/community/",
              },
              {
                label: "GitHub",
                href: "https://github.com/jiitopticachapter",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jiit Optica, Made by <a href="https://github.com/AryanAg08/">Aryan Goyal</a>`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula,
        // theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        // darkTheme: prismThemes.github,
        additionalLanguages: ["powershell"],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  plugins: [
    [
      "vercel-analytics",
      {
        debug: true,
        mode: "auto",
      },
    ],
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-MLJNRGC9",
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-8QK6Y7QDCB",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        swCustom: require.resolve("./src/sw.js"),
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon_io/favicon.ico",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/favicon_io/apple-touch-icon.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/favicon_io/android-chrome-192x192.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./config/sidebarsCommunity.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "dsa",
        path: "dsa",
        routeBasePath: "dsa",
        sidebarPath: require.resolve("./config/sidebarsDSA.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "courses",
        path: "courses",
        routeBasePath: "courses",
        sidebarPath: require.resolve("./config/sidebarsCourses.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "dsa-solutions",
        path: "dsa-solutions",
        routeBasePath: "dsa-solutions",
        editUrl: "#",
        sidebarPath: require.resolve("./config/sidebarsDSASolutions.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "dsa-problems",
        path: "dsa-problems",
        routeBasePath: "dsa-problems",
        sidebarPath: require.resolve("./config/sidebarsDSAProblems.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],    
  ],
};

export default config;