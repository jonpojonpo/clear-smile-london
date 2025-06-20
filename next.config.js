/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/clear-smile-london' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/clear-smile-london' : '',
}

module.exports = nextConfig