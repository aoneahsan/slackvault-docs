import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the SlackVault documentation site.
 * Structure follows Diátaxis: orientation (intro), getting started,
 * task-oriented guides, reference, and an FAQ.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/slack-app-setup',
        'guides/firebase-setup',
        'guides/browser-extension',
        'guides/syncing-and-archive',
        'guides/search-and-export',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/features',
        'reference/architecture',
        'reference/slack-scopes',
        'reference/data-model',
        'reference/api-and-rate-limits',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: ['about-the-author'],
    },
  ],
};

export default sidebars;
