/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.rayatshikshan.edu'],
  },
  api: {
    bodyParser: {
      sizeLimit: '500mb',
    },
  },
};

module.exports = nextConfig;
