/** @type {import('next').NextConfig} */
const nextConfig = {
  include: ['loading.js']
}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/a/**',
        },
      ],
    },
  }
