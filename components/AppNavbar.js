import Link from "next/link"


export default function AppNavbar () {
  return (
    <>
      <nav className="h-[8vh] w-full bg-white drop-shadow-md text-black font-sans font-semibold flex flex-row items-center justify-between px-8 md:px-4 border-b-2">
        <div className="text-lg"><Link href="/"><a className="text-black transition-none hover:text-black hover:drop-shadow">Plorus</a></Link></div>
        <div className="text-lg flex flex-row items-center">
          <div className="md:hidden mx-2 text-slate-600">
            Search
          </div>
          <input type="text" placeholder="Enter..." className="mx-2 p-2 text-sm bg-slate-100 placeholder:font-mono w-48 h-[80%] rounded-sm text-slate-600"></input>
        </div>
      </nav>
    </>
  )
}