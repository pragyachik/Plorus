import Link from "next/link"


export default function AppNavbar () {
  return (
    <>
      <nav className="h-[8vh] w-full bg-stone-100 text-black font-sans font-semibold flex flex-row items-center justify-between px-8 md:px-4 border-b-2 border-b-stone-400">
        <div className="text-lg"><Link href="/"><a className="text-black transition-none hover:text-black hover:drop-shadow">Plorus</a></Link></div>
        <div className="text-lg flex flex-row items-center">
          <div className="md:hidden mx-2 text-stone-600">
            Search
          </div>
          <input type="text" placeholder="Enter..." className="mx-2 p-2 text-sm bg-stone-100 border-2 border-stone-400 w-48 h-[80%] rounded-md text-stone-600"></input>
        </div>
      </nav>
    </>
  )
}