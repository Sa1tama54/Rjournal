/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['kidpassage.com', 'leonardo.osnova.io'],
  },
};

module.exports = nextConfig;
