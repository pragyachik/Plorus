import AppNavbar from "../components/AppNavbar"
import Footer from "../components/Footer"


export default function AppLayout({children}) {
  return (
    <>
      <AppNavbar></AppNavbar>
      {children}
      <Footer isStone={true}></Footer>
    </>
  )
}
