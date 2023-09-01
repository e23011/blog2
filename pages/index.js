import Meta from 'components/meta'
import Container  from 'components/container'
import Hero from 'components/hero'

const params = {
  title: "CUBE",
subtitle: "アウトプットしていくサイト" ,
imageOn: true
}
const Home = () => {
  return (
    <>
    <Container>
      <Meta />
    < Hero {...params} />
    </Container>
    </>  
)
}
export default Home
