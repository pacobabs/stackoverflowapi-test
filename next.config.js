module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.stack.imgur.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}
