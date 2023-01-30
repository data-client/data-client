const path = require('path');

const versions = require('./versions.json');
//const versionsRest = require('./rest_versions.json');

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Rest Hooks',
  tagline: 'Async State Management for React',
  url: 'https://resthooks.io',
  baseUrl: '/',
  organizationName: 'data-client',
  projectName: 'rest-hooks',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  scripts: [],
  stylesheets: [
    /*{
      rel: 'preload',
      href: '/font/Rubik-VariableFont_wght.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/font/Rubik-Italic-VariableFont_wght.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },*/
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: true,
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossOrigin: true,
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.jsdelivr.net',
      crossOrigin: true,
    },
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&family=Rubik:ital,wght@1,300..900&family=Roboto+Mono:wght@100..700&family=Roboto+Mono:ital,wght@1,100..700&display=swap',
      as: 'style',
      crossOrigin: true,
    },
    {
      rel: 'preload',
      href: 'https://fonts.gstatic.com/s/rubik/v21/iJWKBXyIfDnIV7nBrXw.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: true,
    },
    {
      rel: 'preload',
      href: 'https://fonts.gstatic.com/s/robotomono/v22/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: true,
    },
    {
      rel: 'preload',
      href: 'https://fonts.gstatic.com/s/rubik/v21/iJWEBXyIfDnIV7nEnX661A.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: true,
    },
    {
      rel: 'preload',
      href: 'https://fonts.gstatic.com/s/robotomono/v22/L0x7DF4xlVMF-BfR8bXMIjhOm32WWg.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: true,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&family=Rubik:ital,wght@1,300..900&family=Roboto+Mono:wght@100..700&family=Roboto+Mono:ital,wght@1,100..700&display=swap',
      crossOrigin: true,
      media: 'all',
    },
    /*{
      rel: 'preload',
      href: '/assets/css/root.css',
      as: 'style',
      crossOrigin: true,
    },
    {
      rel: 'stylesheet',
      href: '/assets/css/root.css',
      crossOrigin: true,
      media: 'all',
    }, TODO: figure out how to load this*/
  ],
  favicon: 'img/favicon/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  customFields: {
    repoUrl: 'https://github.com/data-client/rest-hooks',
  },
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          //id: 'core',
          path: '../docs/core',
          //routeBasePath: 'core',
          sidebarPath: require.resolve('./sidebars.json'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({ locale, docPath }) => {
            /*if (locale !== 'en') {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }*/
            // We want users to submit doc updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = 'docs';
            return `https://github.com/data-client/rest-hooks/edit/master/${nextVersionDocsDirPath}/${docPath}`;
          },
          lastVersion: 'current',
          includeCurrentVersion: true,
          versions: {
            current: { label: '7.x', path: '', badge: false },
            6.6: { label: '6.6', path: '6.6', banner: 'none' },
          },
          onlyIncludeVersions: isDev
            ? ['current', ...versions.slice(0, 4)]
            : ['current', ...versions],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/root.css'),
            require.resolve('./src/css/customTheme.css'),
            require.resolve('./src/mocks/init.js'),
          ],
        },
        gtag: {
          trackingID: 'UA-138752992-1',
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'rest',
        path: '../docs/rest',
        routeBasePath: 'rest',
        sidebarPath: require.resolve('./sidebars-rest.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: ({ locale, docPath }) => {
          /*if (locale !== 'en') {
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          }*/
          // We want users to submit doc updates to the upstream/next version!
          // Otherwise we risk losing the update on the next release.
          const nextVersionDocsDirPath = 'docs/rest';
          return `https://github.com/data-client/rest-hooks/edit/master/${nextVersionDocsDirPath}/${docPath}`;
        },
        lastVersion: 'current',
        includeCurrentVersion: true,
        versions: {
          current: { label: '6.x', path: '', badge: false, banner: 'none' },
          5.2: { label: '5.2', path: '5.2', banner: 'none' },
        },
        /*onlyIncludeVersions: isDev
          ? ['current', ...versionsRest.slice(0, 4)]
          : ['current', ...versionsRest],*/
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'graphql',
        path: '../docs/graphql',
        routeBasePath: 'graphql',
        sidebarPath: require.resolve('./sidebars-graphql.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: ({ locale, docPath }) => {
          /*if (locale !== 'en') {
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          }*/
          // We want users to submit doc updates to the upstream/next version!
          // Otherwise we risk losing the update on the next release.
          const nextVersionDocsDirPath = 'docs/graphql';
          return `https://github.com/data-client/rest-hooks/edit/master/${nextVersionDocsDirPath}/${docPath}`;
        },
        lastVersion: 'current',
        includeCurrentVersion: true,
        versions: {
          current: { label: '0.3', path: '', badge: false },
        },
        /*onlyIncludeVersions: isDev
          ? ['current', ...versionsRest.slice(0, 4)]
          : ['current', ...versionsRest],*/
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          if (existingPath.includes('5.0')) return undefined;
          if (
            existingPath.includes('/rest/') &&
            existingPath !== '/rest/guides/abort' // this path exists for both, so do not redirect
          ) {
            return [
              existingPath.replace('/rest', '/docs/rest'),
              existingPath.replace('/rest', '/docs'),
            ];
          } else if (existingPath.includes('/graphql/')) {
            return [existingPath.replace('/graphql', '/docs/graphql')];
          }
          return undefined;
        },
        redirects: [
          {
            to: '/docs/concepts/normalization',
            from: [
              '/docs/getting-started/entity',
              '/docs/getting-started/schema',
            ],
          },
          {
            to: '/docs/concepts/expiry-policy',
            from: [
              '/docs/getting-started/expiry-policy',
              '/docs/guides/resource-lifetime',
            ],
          },
          {
            to: '/docs/concepts/atomic-mutations',
            from: ['/docs/getting-started/immediate-updates'],
          },
          {
            to: '/docs/concepts/validation',
            from: ['/docs/getting-started/validation'],
          },
          {
            to: '/docs',
            from: [
              '/docs/getting-started/introduction',
              '/docs/getting-started/usage',
            ],
          },
          {
            to: '/docs/getting-started/data-dependency',
            from: [
              '/docs/guides/loading-state',
              '/docs/guides/network-errors',
              '/docs/concepts/loading-state',
              '/docs/concepts/network-errors',
            ],
          },
          {
            to: '/docs/api/types',
            from: ['/docs/api/README'],
          },
          {
            to: '/docs/guides/img-media',
            from: ['/docs/guides/binary-fetches'],
          },
          {
            to: '/rest/api/createResource',
            from: [
              '/rest/api/resource',
              '/rest/api/BaseResource',
              '/rest/guides/rest-types',
              '/docs/api/resource',
              '/docs/api/BaseResource',
              '/docs/guides/rest-types',
              '/docs/guides/resource-types',
            ],
          },
          {
            to: '/rest/api/RestEndpoint',
            from: [
              '/rest/guides/extending-endpoints',
              '/docs/guides/extending-endpoints',
              '/docs/guides/url',
              '/docs/guides/endpoints',
            ],
          },
          {
            to: '/rest/api/hookifyResource',
            from: ['/rest/api/HookableResource', '/docs/api/HookableResource'],
          },
          {
            to: '/docs/api/useSuspense',
            from: ['/docs/next/api/useSuspense'],
          },
          {
            to: '/docs/api/useDLE',
            from: ['/docs/guides/no-suspense'],
          },
          {
            to: '/rest/guides/pagination',
            from: ['/docs/guides/infinite-scrolling-pagination'],
          },
          {
            to: '/rest',
            from: ['/rest/usage', '/docs/rest'],
          },
          {
            to: '/graphql',
            from: ['/graphql/usage', '/docs/graphql'],
          },
        ],
      },
    ],
    path.resolve(__dirname, './node-plugin'),
    path.resolve(__dirname, './profiling-plugin'),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    /** @type {import('@docusaurus/theme-mermaid').ThemeConfig} */
    {
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
        options: {
          fontFamily:
            "'Rubik', 'Avenir Next', 'Segoe UI', Tahoma, Geneva,Verdana, sans-serif",
          flowchart: {
            //diagramPadding: 100,
          },
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/rest_hooks_logo.png',
      // Open Graph and Twitter card images.
      ogImage: 'img/rest_hooks_logo.png',
      twitterImage: 'img/rest_hooks_logo.png',
      announcementBar: {
        id: 'announcementBar-3', // Increment on change
        content: `Give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/data-client/rest-hooks">GitHub</a>. Get support on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/35nb8Mz">Discord</a>. File <a target="_blank" rel="noopener noreferrer" href="https://github.com/data-client/rest-hooks/issues/new/choose">bug report</a>.`,
      },
      navbar: {
        title: 'Rest Hooks',
        logo: {
          src: 'img/rest_hooks_logo.svg',
          alt: 'Rest Hooks Logo',
        },
        hideOnScroll: true,
        items: [
          {
            to: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            to: 'docs/api/useSuspense',
            label: 'Hooks',
            position: 'left',
            activeBasePath: '/donotuse',
          },
          {
            to: 'rest',
            label: 'REST',
            position: 'left',
          },
          {
            to: 'graphql',
            label: 'GraphQL',
            position: 'left',
          },
          { to: '/blog', label: 'News', position: 'left' },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'default',
            position: 'right',
            dropdownItemsBefore: [
              {
                label: 'Upgrade Guide',
                to: 'docs/upgrade/upgrading-to-7',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'rest',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'graphql',
            position: 'right',
          },
          {
            to: 'demos',
            //label: '🎮 Demos',
            position: 'right',
            className: 'header-demos-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://www.github.com/data-client/rest-hooks',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/9aTc42GXWR',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord chat support',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs',
              },
              {
                label: 'REST',
                to: '/rest',
              },
              {
                label: 'GraphQL',
                to: '/graphql',
              },
              {
                label: 'Images / Binary',
                to: '/docs/guides/img-media',
              },
              {
                label: 'Websockets+SSE',
                to: '/docs/api/Manager#middleware-data-stream',
              },
              {
                label: 'Hooks',
                to: '/docs/api/useSuspense',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/35nb8Mz',
              },
              {
                label: 'Stack Overflow',
                href: 'http://stackoverflow.com/questions/tagged/rest-hooks',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RestHooks',
              },
              {
                label: 'Bug Report',
                href: 'https://github.com/data-client/rest-hooks/issues/new/choose',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Github',
                to: 'https://github.com/data-client/rest-hooks',
              },
              {
                label: 'Demo (Github)',
                to: 'https://stackblitz.com/github/data-client/rest-hooks/tree/master/examples/github-app?file=src%2Fpages%2FIssueList.tsx',
              },
              {
                label: 'Demo (Todo)',
                to: 'https://stackblitz.com/github/data-client/rest-hooks/tree/master/examples/todo-app?file=src%2Fpages%2FHome%2FTodoList.tsx',
              },
              {
                label: 'Demo (NextJS)',
                to: 'https://stackblitz.com/github/data-client/rest-hooks/tree/master/examples/nextjs?file=pages%2FAssetPrice.tsx',
              },
              /*{
              html: `<iframe
              src="https://ghbtns.com/github-btn.html?user=data-client&amp;repo=rest-hooks&amp;type=star&amp;count=true&amp;size=small"
              width="110"
              height="19.6"
              title="GitHub Stars"
            />`,
            },*/
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nathaniel Tucker. Some icons by <a href="https://www.freepik.com" title="Freepik">Freepik</a>`,
        logo: {
          src: 'img/rest_hooks_logo.svg',
          alt: 'Rest Hooks Logo',
          width: 94,
          height: 90,
        },
      },
      algolia: {
        appId: '09LY5NUEP1',
        apiKey: 'c7ff0e67454c62cecdd72b22a317de43',
        indexName: 'resthooks',
        contextualSearch: true,
        sitemaps: ['https://resthooks.io/sitemap.xml'],
        placeholder: 'Search Rest Hooks',
        debug: process.env.NODE_ENV === 'development',
      },
    },
};
