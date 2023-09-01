import Meta from 'components/meta'
import Container  from 'components/container'
import Hero from 'components/hero'

const params = {
  title: "Blog",
subtitle: "Recent Posts", };
const Blog = () => {
  return (
      <>      
      <Container>
        <Meta pageTitle='ブログ' pageDesc ='ブログの記事一覧'/>
      < Hero {...params} />
      </Container>
      </>  
  )
}
export default Blog
