export default defineEventHandler((event) => {
  const baseUrl = 'https://harmonia.dagsolution.com'
  const now = new Date().toISOString()

  return [
    {
      loc: `${baseUrl}/`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: `${baseUrl}/images/harmonia-logo.png`,
          caption: 'Harmonia - Frekans Tabanlı Ses Terapi Uygulaması',
          title: 'Harmonia Ana Sayfa'
        }
      ]
    },
    {
      loc: `${baseUrl}/en`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: `${baseUrl}/images/harmonia-logo.png`,
          caption: 'Harmonia - Frequency Based Sound Therapy App',
          title: 'Harmonia Home'
        }
      ]
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/en/privacy-policy`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.5,
    },
  ]
})
