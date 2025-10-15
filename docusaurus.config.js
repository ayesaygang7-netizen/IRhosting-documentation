// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'ایران هاستینگ ۲۴',
  tagline: 'مستندات فضای ابری ایران هاستینگ ۲۴',
  url: 'https://your-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'iranhosting24',
  projectName: 'iranhosting24',

  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ایران هاستینگ ۲۴',
        logo: {
          alt: 'IranHosting24 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'صفحه اصلی',
            position: 'left',
          },
          {
            to: '/docs/intro',
            label: 'مستندات',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'بلاگ',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'دسترسی سریع',
            items: [
              {
                label: 'مستندات',
                to: '/docs/intro',
              },
              {
                label: 'بلاگ',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ایران هاستینگ ۲۴`,
      },
    }),

  // ✅ اصلاح‌شده: مقدار defer به صورت رشته
  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
        defer: 'true', // 👈 این درستشه
      },
    },
  ],
};

module.exports = config;
