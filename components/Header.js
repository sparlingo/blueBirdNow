import React, { Component } from 'react'
import Router from 'next/router'
import Head from 'next/head'

class Header extends Component {
  state = { loading: false }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ loading: true })
    }
    Router.onRouteChangeComplete = () => {
      this.setState({ loading: false })
    }
    Router.onRouteChangeError = () => {
      this.setState({ loading: false })
    }
  }

  render() {
    return (
      <div className="header">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="BaseBallNexus" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#302ecd" />
          <title>BBN PWA</title>
          <link rel="manifest" href="/_next/static/manifest.json" />
          <link rel="icon" href="/_next/public/icon_192x192.ico" />
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
          <Loader loading={this.state.loading} />
        </Head>
      </div>
    )
  }
}
const Loader = ({ loading }) => <div className={loading ? 'loading-show' : ''} id="loader-bar" />;

export default Header