import Container  from 'components/container'
import Hero from 'components/hero'

const params = {
  title: "Blog",
subtitle: "Recent Posts", };
const Blog = () => {
  return (
      <>      
      <Container>
      < Hero {...params} />
      </Container>
      </>  
  )
}
export default Blog
