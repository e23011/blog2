import Hero from 'components/hero'

const params = {
  title: "CUBE",
subtitle: "アウトプットしていくサイト" ,}
const Home = () => {
  return (
    <>
    < Hero {...params} />
    </>  
)
}
export default Home
