import Link from 'next/link'
import styles from 'styles/logo.module.css'
const Logo = ({ boxOn = true}) => {
  return (
  <Link classname={boxOn ? styles.box : styles.basic} href="/">
    CUBE
    </Link>
  )
}
export default Logo