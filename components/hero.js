const Hero = ({title, subtitle, imageOn = false}) => (
  <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    {imageOn && <figure>[画像]</figure>}
  </>
)
export default Hero