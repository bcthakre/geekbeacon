/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  module.exports = {
    basePath: process.env.NODE_ENV === "production" ? "/geekbeacon" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/geekbeacon" : "",
  };
  
}
