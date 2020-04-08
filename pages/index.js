import Link from 'next/link'
import groq from 'groq'

import client from '../sanityClient'
import Oops from '../components/Oops'

const Home = (props) => {
  const { posts = [] } = props
  return (
    <div className="blogPosts">
      <h1>Welcome to BBN!</h1>
      <ul>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) => 
            slug && (
              <li key={_id}>
                <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
                  <a>{title}</a>
                </Link>{'-'}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </ul>
    </div>
  )
}

Home.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
})


export default Home
