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
    < Hero {...params} />
    </Container>
    </>  
)
}
export default Home
