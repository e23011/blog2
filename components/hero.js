import styles from 'styles/hero.module.css'

const Hero = ({title, subtitle, imageOn = false}) =>(
  <div className={styles.flexContainer}>
  <div classname={styles.text}>
    <h1 classname={styles.title}>{title}</h1>
    <p classname={styles.subtitle}>{subtitle}</p>
  </div>
    { imageOn && <figure>[画像]</figure> }
  </div>
 )
export default Hero