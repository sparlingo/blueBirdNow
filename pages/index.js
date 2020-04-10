import React from 'react'

import Layout from '../components/Layout'
import { useFetchUser } from '../utils/user'

export default function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>A thing</h1>

      {loading && <p>Loading login info...</p>}

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Layout>
  )
}