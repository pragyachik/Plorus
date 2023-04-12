import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import plorusStyles from '../styles/Plorus.module.css'
import Link from "next/link"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </>
  )
}
