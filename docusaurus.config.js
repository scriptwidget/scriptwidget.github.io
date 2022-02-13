module.exports = {
  title: 'ScriptWidget',
  tagline: 'Create Widgets for iOS and macOS using JSX label style in JavaScript',
  url: 'https://scriptwidget.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ScriptWidget', // Usually your GitHub org/user name.
  projectName: 'scriptwidget.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ScriptWidget',
      logo: {
        alt: 'ScriptWidget',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/ScriptWidget',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
            {
              label: 'Documents',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/scriptwidgetapp',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/eGzEaP6TzR',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/everettjf',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ScriptWidget',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ScriptWidget, Inc. Built by everettjf.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ScriptWidget/scriptwidget.github.io/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
