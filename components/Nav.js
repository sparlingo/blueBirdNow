import React from 'react'
import Link from 'next/link'

import { useUser } from '../utils/user'

const Nav = () => {
  const { user, loading } = useUser()

  return (
    <header className="navbar">
      <section className="navbar-section">
        <Link href="/">
          <button className="btn btn-link text-bold">Home</button>
        </Link>
        {!loading && 
          (user ? (
            <>
              <Link href="/profile">
                <button className="btn btn-link text-bold">Profile</button>
              </Link>
              <Link href="/api/logout">
                <button className="btn btn-link text-bold">Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/api/login">
                <button className="btn btn-link text-bold">Login</button>
              </Link>
            </>
          ))
        }
      </section>
    </header>
  ) 
}

export default Nav