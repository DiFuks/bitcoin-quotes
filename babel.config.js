const isDevServer = !!process.env.WEBPACK_DEV_SERVER;

const config = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ]
}

if (isDevServer) {
  config.plugins = ['react-refresh/babel'];
}

module.exports = config;
