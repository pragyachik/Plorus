import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import plorusStyles from '../styles/Plorus.module.css'
import Link from "next/link"
import Carousel from "../components/Carousel"
import Button from "../components/Button"

export default function Home() {
  return (
    <div className={plorusStyles.container}>
      <h1 className="font-mono text-blue-600">Homepage</h1>
      <Link href="/about"><a>About</a></Link>
      <Carousel />
      <Button />
    </div>
  )
}
