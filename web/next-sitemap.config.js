/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://guide.gatitosworld.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/500'],
};

