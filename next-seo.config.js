export default {
  titleTemplate: "%s | SiteTitle",
  defaultTitle: "SiteTitle",
  description: "This is the site description.",
  canonical: "https://www.example.com/",
  type: "website",
  url: "https://www.example.com/page",
  title: "Open Graph Title",
  description: "Open Graph Description",
  images: [
    {
      url: "https://www.example.com/og-image.jpg",
      width: 800,
      height: 600,
      alt: "Og Image Alt",
    },
    {
      url: "https://www.example.com/og-image-2.jpg",
      width: 800,
      height: 600,
      alt: "Og Image Alt 2",
    },
  ],
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
