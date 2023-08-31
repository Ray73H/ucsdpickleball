/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // ...
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
    return config;
  },
  // ...
  pages: {
    "/": "app/layout.jsx",
  },
  // ...
};
