import Meta from 'components/meta'
import Container  from 'components/container'
import Hero from 'components/hero'

const getStaticProps = async context => ({
props: { title: "CUBE",
subtitle: "アウトプットしていくサイト" ,
imageOn: true
}
})
const Home = props =>  (
    <Container>
      <Meta />
    < Hero {...props} />
    </Container>
)
export {getStaticProps}
export default Home
