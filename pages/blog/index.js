import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import { getAllPosts } from 'lib/api'
// import Posts from 'components/posts'

const params = {
  title: 'Blog',
  subtitle: 'Recent Posts'
}
const Blog = ({ posts }) => {
  return (
    <>
      <Container>
        <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
        <Hero {...params} />
        {/* <Posts posts={posts} /> */}
      </Container>
    </>
  )
}
const getStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}
export default Blog
