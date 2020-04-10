import React from 'react'

import Layout from '../components/Layout'
import withAuth from '../components/With-Auth'

const Profile = ({ user }) => (
  <Layout user={user}>

    <div>
      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  </Layout>
)

export default withAuth(Profile)