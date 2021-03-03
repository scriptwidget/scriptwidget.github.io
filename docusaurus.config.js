module.exports = {
  title: 'ScriptWidget',
  tagline: 'Create Widgets using JSX label style in JavaScript',
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
        {to: 'blog', label: 'Blog', position: 'left'},
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ScriptWidget',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/scriptwidgetapp',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ScriptWidget',
            },
            {
              label: 'Weibo',
              href: 'https://weibo.com/fullstackdev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ScriptWidget/scriptwidget.github.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
