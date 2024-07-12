/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    eslint : false,
    webpack: (config) => {
      config.resolve.modules.push(__dirname);
      return config;
  },
  
  };
  
  module.exports = nextConfig;
  