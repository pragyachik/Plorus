import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import plorusStyles from '../styles/Plorus.module.css'

export default function Home() {
  return (
    <div className={plorusStyles.container}>
      <h1 className={plorusStyles.title}>Homepage</h1>
      <a href="/about">About</a>
    </div>
  )
}
