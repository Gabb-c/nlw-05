const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');

// Enable inline images
module.exports = withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg', 'png', 'svg', 'gif', 'ico', 'webp', 'jp2', 'avif'],
});

// Bundle analyzer plugin
module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Enable Webpack 5
module.exports = {
  //future: {
  //  webpack5: true
  //},
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}
