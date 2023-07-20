import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
    <header>Header</header>
    <main>
    <div>
      <h1>CUBE</h1>
      <p>アウトプットしていくサイト</p>
    </div>
    </main>
    <footer>FOOTER</footer>
    </>
  )
}
export default Home