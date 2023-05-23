module.exports = {
  reactStrictMode: true,
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  images: {
    unoptimized: true
  }
}
