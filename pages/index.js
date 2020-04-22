import React from 'react'

import Layout from '../components/Layout'
import { useFetchUser } from '../utils/user'

export default function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <div className="hero hero-lg bg-primary">
        <div className="hero-body">
          <h1>Hero title</h1>
          <p>This is a hero example</p>
        </div>
      </div>

      {loading && <p>Loading login info...</p>}

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Layout>
  )
}