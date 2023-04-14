
const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col h-[300vh] w-full">
        <div className="h-[100vh] w-full bg-gradient-to-r md:bg-gradient-to-b from-indigo-400 from-5% via-sky-400 via-30% to-emerald-400 to-90%">
          <div className="mt-[10vh] h-[90vh] w-full bg-my_bg_image bg-cover bg-center bg-no-repeat">
            <div className="md:hidden">
              <div className="text-6xl text-white font-bold font-sans pl-[10vw] pt-[25vh] w-[60vw]">
                Generate Academic Journals and assorted AI media
              </div>
              <div className="text-xl text-white font-mono pl-[10vw] pt-[5vh] w-[60vw]">
                Find all our varied offerings on the documentation page
              </div>
            </div>
          </div>
          
        </div>
        <div className="h-[100vh] w-full bg-white">

        </div>
        <div className="h-[100vh] w-full bg-slate-200">
          <div className="bg-my_bg_image w-full h-[100vh] bg-cover bg-center bg-no-repeat">

          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;