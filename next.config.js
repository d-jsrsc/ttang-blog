/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    minimumCacheTTL: 60,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
// module.exports = nextConfig
