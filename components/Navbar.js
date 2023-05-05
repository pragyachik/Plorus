import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import Link from 'next/link'


const Navbar = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setScrollPosition] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const mobileLinks = [
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Pricing",
      href: "/pricing"
    },
    {
      name: "Blog",
      href: "/"
    },
    {
      name: "Documentation",
      href: "/"
    },
  ]

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
    <nav className={"flex flex-row justify-between px-12 md:px-6 items-center fixed top-0 left-0 h-[10vh] w-full "+(isScrolled?"shadow-[0px_4px_20px_0px_rgba(0,0,0,.15)] bg-[rgba(255,255,255,0.8)] border-none":"bg-[rgba(0,0,0,0.15)]  border-b-2 border-b-white")}>
      <div className={"text-3xl md:text-2xl font-mono "+(isScrolled?" text-black":" text-white")}>
          <Link href="/"><a className={"transition-none "+(isScrolled?"text-black hover:text-black":"text-white hover:text-white")}>
            Plorus
          </a></Link>
      </div>
      <div className={"md:hidden flex flex-row space-between font-mono text-xl"}>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer "+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          <Link href="/about"><a className={"transition-none hover:drop-shadow hover:cursor-pointer "+(isScrolled?"text-black hover:text-emerald-500":"text-white hover:text-emerald-200")}>
            About
          </a></Link>
        </div>
        <div className={"pl-4 pr-4"}>
          <Link href="/pricing"><a className={"transition-none hover:drop-shadow hover:cursor-pointer "+(isScrolled?"text-black hover:text-emerald-500":"text-white hover:text-emerald-200")}>
            Pricing
          </a></Link>
        </div>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer "+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          <Link href="/pricing"><a className={"transition-none hover:drop-shadow hover:cursor-pointer "+(isScrolled?"text-black hover:text-emerald-500":"text-white hover:text-emerald-200")}>
            Blog
          </a></Link>
        </div>
        <div className={"pl-4 pr-4 hover:drop-shadow hover:cursor-pointer"+(isScrolled?" hover:text-emerald-500":" hover:text-emerald-200")}>
          <Link href="/pricing"><a className={"transition-none hover:drop-shadow hover:cursor-pointer "+(isScrolled?"text-black hover:text-emerald-500":"text-white hover:text-emerald-200")}>
            Documentation
          </a></Link>
        </div>
      </div>
      <div className={"hidden md:block "} onClick={()=>setShowMenu(true)}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke={isScrolled?"black":"white"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
    {showMenu&&<div className="max-md:hidden fixed top-0 left-0 w-full h-full bg-slate-200 flex flex-col items-center justify-start">
            <div className="border-b-2 border-b-slate-300 py-4 font-mono w-full text-xl flex flex-row justify-between">
              <div className="pl-6 text-2xl text-slate-400 font-mono">Plorus</div>
              <button className="text-2xl pr-6" onClick={()=>setShowMenu(false)}>X</button>
            </div>
        {mobileLinks.map((link)=>{
            return(<div key={link.name} className="border-b-2 border-b-slate-300 py-4 font-mono w-full text-xl text-center">
              <Link href={link.href}><a className="text-slate-500 hover:text-slate-500 transition:none">{link.name}</a></Link>
            </div>)
        })}
      </div>}
    </>
  )
}

export default Navbar;