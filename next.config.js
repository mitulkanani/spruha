/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  assetPrefix : isProd ? 'https://nextjs.spruko.com/spruha-ts/preview/' : undefined,
  images: {
    loader: 'imgix',
    path: '/',
  },
  
}

module.exports = nextConfig
