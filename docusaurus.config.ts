import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// SlackVault — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// Product site: https://slackvault.aoneahsan.com
// ---------------------------------------------------------------------------

const config: Config = {
  title: 'SlackVault Docs',
  tagline: 'Back up and archive your Slack workspace to storage you control — at zero cost.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting site `slackvault-docs`.
  url: 'https://slackvault-docs.aoneahsan.com',
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'slackvault-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. JSON-LD (WebSite, SoftwareApplication,
  // Organization) helps Google Rich Results, Perplexity, ChatGPT, and Claude
  // extract structured entity data when citing this documentation.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://slackvault-docs.aoneahsan.com/',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/xml',
        title: 'SlackVault Docs sitemap',
        href: 'https://slackvault-docs.aoneahsan.com/sitemap.xml',
      },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'SlackVault Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'SlackVault Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#4a154b' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SlackVault Documentation',
        url: 'https://slackvault-docs.aoneahsan.com',
        description:
          'Documentation for SlackVault, a zero-cost Slack backup and archive platform: connect a Slack workspace, sync messages/channels/files to your own Firebase, then search and export. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SlackVault',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, Chrome (browser extension)',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        url: 'https://slackvault.aoneahsan.com',
        sameAs: 'https://slackvault-docs.aoneahsan.com',
        author: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
        },
        description:
          'Zero-cost Slack backup and archive platform. Connect a Slack workspace via OAuth, sync messages, channels, threads, files, and users through a browser extension, and store everything in your own Firebase free tier and FilesHub. Search and export your archive from the web app.',
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/slackvault-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for SlackVault — a zero-cost Slack backup and archive platform. Connect Slack, sync to your own Firebase, then search and export. Maintained by Ahsan Mahmood.' },
      { name: 'keywords', content: 'slack backup, slack archive, slack export, slack message backup, slack workspace backup, slack data backup, firebase slack backup, slack export tool, self-hosted slack backup, browser extension slack backup, slackvault' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'SlackVault Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'SlackVault',
      logo: {
        alt: 'SlackVault logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/getting-started/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/about-the-author',
          label: 'Author',
          position: 'right',
        },
        {
          href: 'https://slackvault.aoneahsan.com',
          label: 'Product site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Installation', to: '/getting-started/installation' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'SlackVault web app', href: 'https://slackvault.aoneahsan.com' },
            { label: 'Features', href: 'https://slackvault.aoneahsan.com/features' },
            { label: 'Install', href: 'https://slackvault.aoneahsan.com/install' },
            { label: 'Get it on Google Play', href: 'https://play.google.com/store/apps/details?id=com.aoneahsan.slackvault' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
