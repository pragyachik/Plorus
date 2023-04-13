import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"


const Navbar = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setScrollPosition] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>0){
      setScrollPosition(true)
    }
    else{
      setScrollPosition(false)
      console.log(latest)
    }
  })

  //bg-[rgba(255,255,255,0)]
  //style={{"font-variation-settings":"'cuts' 100, 'move' 100","font-variant-ligatures":"common-ligatures"}}

  return (
    <>
    {/* <nav className={"h-[14vh] w-full "+(scrollPosition?"shadow-[0px_4px_20px_0px_rgba(0,0,0,.15)] bg-[rgba(255,255,255,0.5)] border-none":" border-b-2 border-b-white")}>
    </nav> */}
    <nav className={"flex flex-row justify-between pl-12 pr-12 items-center fixed top-0 left-0 h-[10vh] w-full "+(isScrolled?"shadow-[0px_4px_20px_0px_rgba(0,0,0,.15)] bg-[rgba(255,255,255,0.8)] border-none":"bg-[rgba(0,0,0,0.15)]  border-b-2 border-b-white")}>
      <div className={"text-3xl font-mono "+(isScrolled?" text-black":" text-white")}>
        Plorus
      </div>
      <div className={"md:hidden flex flex-row space-between font-mono text-xl"+(isScrolled?" text-black":" text-white")}>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer "+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          About
        </div>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer "+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          Pricing
        </div>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer "+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          Blog
        </div>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer"+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          Documentation
        </div>
      </div>
      <div className={"hidden md:block "}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke={isScrolled?"black":"white"}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      </div>
      {/* <div class="hidden md:block space-y-2">
        <div class={"w-8 h-0.5 "+(isScrolled?"bg-black":"bg-white")}></div>
        <div class={"w-8 h-0.5 "+(isScrolled?"bg-black":"bg-white")}></div>
        <div class={"w-8 h-0.5 "+(isScrolled?"bg-black":"bg-white")}></div>
      </div> */}
    </nav>
    </>
  )
}

export default Navbar;