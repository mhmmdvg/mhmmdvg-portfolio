/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
