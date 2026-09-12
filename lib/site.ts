const fallbackSiteUrl =
  process.env.NODE_ENV === 'production' ? 'https://laptoprepairlab.tech' : 'http://localhost:3000';

export const siteUrl = (process.env.SITE_URL || fallbackSiteUrl).replace(/\/$/, '');
