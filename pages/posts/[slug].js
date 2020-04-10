import client from '../../utils/sanityClient'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const { 
    title = 'Missing title', 
    name = 'Missing name', 
    categories,
    //authorImage,
    mainImage,
    body = []
  } = props

  return (    
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
      {mainImage && (
        <div>
          <img src={urlFor(mainImage).width(350).url()} />
        </div>
      )}
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  )
}
// below for the author image
//  "authorImage": author->image
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  body,
  mainImage
}`

Post.getInitialProps = async function(context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post