import React from 'react'

import Header from './Header'
import { UserProvider } from '../utils/user'

import Nav from '../components/Nav'

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Header />
    <Nav />
    <main>
      <div className="container">{children}</div>
    </main>

  </UserProvider>
)

export default Layout