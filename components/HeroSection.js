import Link from 'next/link'
// import dashboardImage from "../public/dashboard_placeholder.png"

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col h-[300vh] w-full">
        <div className="h-[100vh] w-full bg-gradient-to-r md:bg-gradient-to-b from-indigo-400 from-5% via-sky-400 via-30% to-emerald-400 to-90%">
          <div className="mt-[10vh] h-[90vh] w-full bg-my_bg_image bg-cover bg-center bg-no-repeat flex flex-row">
            <div className="">
              <div className="text-6xl text-white font-bold font-sans pl-[10vw] pt-[25vh] w-[60vw] lg:w-[90vw] md:pt-[15vh] md:text-5xl">
                Generative AI to accelerate drug discovery
              </div>
              <div className="text-xl text-white font-mono pl-[10vw] pt-[3vh] w-[60vw] lg:w-[90vw] md:text-lg">
                Contributing knowledge to Common Goods
              </div>
              <div className="pl-[10vw] pt-[5vh] flex flex-row">
                <div>
                  <Link href="/demo">
                    <button className="bg-slate-800 shadow-md text-white rounded-lg px-8 py-2 mr-4 text-lg font-bold font-mono hover:shadow-lg hover:bg-slate-900 md:text-base md:px-4 md:py-2 md:mr-2">Try our Demo!</button>
                  </Link>
                  <button className="bg-slate-200 text-black shadow-md rounded-lg px-8 py-2 ml-4 text-lg font-bold font-mono hover:shadow-lg hover:bg-slate-100 md:text-base md:px-4 md:py-2 md:ml-2">Contact Us</button>
                </div>
              </div>
            </div>
            {/* <div className="md:hidden w-full h-full flex items-center justify-center mr-[10vw]">
              <Image src="/dashboard_placeholder.png" width={1200} height={800} />
            </div> */}
          </div>
          
        </div>
        <div className="h-[100vh] w-full bg-white pb-[5vh]">
            <div className='mx-[10vw] mt-[10vh] h-[10vh] items-center font-bold text-slate-500 text-2xl'>
              How Plorus works
            </div>
            <div className='flex flex-row h-[70vh] mx-[10vw] w-[80vw] border-2 border-slate-200'>

            </div>
        </div>
        <div className="h-[100vh] w-full bg-slate-200">
          <div className="bg-my_bg_image w-full h-[100vh] bg-cover bg-center bg-no-repeat">
            <div className='md:text-2xl w-full text-center pt-[10vh] h-[20vh] items-center font-bold text-slate-600 text-4xl text-mono'>
              Explore our latest blog posts!
            </div>
            <div className='md:hidden flex flex-row h-[70vh] mx-[10vw] w-[80vw] items-center justify-between'>
                <div className='h-[60vh] w-[20vw] mx-5 flex flex-col justify-center items-center'>
                  <div className="w-[20vw] h-[50vh] rounded-lg bg-gray-400">

                  </div>
                  <div className='w-[20vw] mt-4 text-slate-800 font-semibold text-lg text-center'>
                  Plorus Launches: Things to know
                  </div>
                </div>
                <div className='h-[60vh] w-[20vw] mx-5 flex flex-col justify-center items-center'>
                  <div className="w-[20vw] h-[50vh] rounded-lg bg-gray-400">

                  </div>
                  <div className='w-[20vw] mt-4 text-slate-800 font-semibold text-lg text-center'>
                  How the Plorus dashboard works
                  </div>
                </div>
                <div className='h-[60vh] w-[20vw] mx-5 flex flex-col justify-center items-center'>
                  <div className="w-[20vw] h-[50vh] rounded-lg bg-gray-400">

                  </div>
                  <div className='w-[20vw] mt-4 text-slate-800 font-semibold text-lg text-center'>
                    What clients say about Plorus
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;