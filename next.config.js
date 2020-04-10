const withCSS = require('@zeit/next-css')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const nextWorkboxPlugin = require('next-workbox-webpack-plugin')
const path = require('path')

module.exports = withCSS({
  webpack(config, { isServer, buildId, dev }) {
    config.node = {
      fs: 'empty'
    }

    // if (!isServer) {
    //   config.module.rules.use({
    //     loader: 'css-purify-webpack-loader',
    //     options: {
    //       includes: [
    //         './pages/*.js',
    //         './components/*.js'
    //       ]
    //     }
    //   })
    // }
    

    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next'
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        },
        {
          urlPattern: '/posts',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gir)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }

    if (!isServer && !dev) {
      config.plugins.push(
        new nextWorkboxPlugin({
          buildId,
          ...workboxOptions
        }),
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'Next BBN PWA',
          short_name: 'BBN-PWA',
          description: 'A baseball card game PWA using Next.js',
          background_color: '#ffffff',
          theme_color: '#5755d7',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'Next-PWA',
            'apple-mobile-web-app-status-bar-style': '#5755d9'
          },
          icons: [
            {
              src: path.resolve('public/favicon.ico'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: '/public'
            }
          ],
          includeDirectory: true,
          publicPath: '..'
        })
      )
    }

    return config
  }
})