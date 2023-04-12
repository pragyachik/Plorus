import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"


const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrollPosition, setScrollPosition] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>0){
      setScrollPosition(true)
    }
    else{
      setScrollPosition(false)
      console.log(latest)
    }
  })

  return (
    <>
    {/* <nav className={"h-[14vh] w-full "+(scrollPosition?"shadow-[0px_4px_20px_0px_rgba(0,0,0,.15)] bg-[rgba(255,255,255,0.5)] border-none":" border-b-2 border-b-white")}>
    </nav> */}
    <nav className={"fixed top-0 left-0 h-[14vh] w-full "+(scrollPosition?"shadow-[0px_4px_20px_0px_rgba(0,0,0,.15)] bg-[rgba(255,255,255,0.6)] border-none":"bg-[rgba(255,255,255,0)]  border-b-2 border-b-white")}>
    </nav>
    </>
  )
}

export default Navbar;