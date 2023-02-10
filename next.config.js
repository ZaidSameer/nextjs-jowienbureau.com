/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        // port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.pbminfotech.com',
        // https://doctery-demo.pbminfotech.com/demo3/blog-grid-view/
        // port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
