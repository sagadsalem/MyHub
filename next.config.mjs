import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const appEnv = process.env.APP_ENV === 'local'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: appEnv ? '' : '/MyHub',
  assetPrefix: appEnv ? '' : 'https://sagadsalem.github.io/MyHub',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: { scrollRestoration: true },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  webpack: (config, { isServer }) => {
    // Add the necessary loader for MDX files
    if (!isServer) {
      config.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['next/babel'],
            },
          },
          '@mdx-js/loader',
        ],
      })
    }
    return config
  },
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
