/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
      serverActions:true,
    },
    images: {
      // next js allow that image which is stored in specific domain otherwise throw error
      domains: ['lh3.googleusercontent.com','res.cloudinary.com','avatars.githubusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        // top level await true otherwise it thrown error
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig
  