import React from 'react'

import Header from './Header'
import { UserProvider } from '../utils/user'

import Nav from '../components/Nav'
import Oops from '../components/Oops'

const Layout = ({ user, loading = false, error, children }) => (
  <UserProvider value={{ user, loading }}>
    <Header />
    <Nav />
    <main>
      {error ? <Oops /> : <div className="container">{children}</div>}
    </main>
  </UserProvider>
)

export default Layout