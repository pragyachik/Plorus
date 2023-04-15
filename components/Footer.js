
const Footer = () => {
  return (
    <>
      <div className="h-[70vh] w-full bg-gray-800 pt-8 pb-8 flex flex-col justify-between px-10">
        <div className="w-full flex flex-col justify-left h-[10vh] px-[10vw] md:px-[1vw] pt-4">
          <div className="text-slate-300 font-mono">Stay Updated</div>
          <div className="flex flex-row mt-2">
            <input type="text" className="text-lg w-60 h-10 text-md bg-slate-400 placeholder-slate-800 rounded-lg p-2" placeholder="Enter email"></input>
            <button type="submit" className="text-2xl w-14 h-10 ml-2 bg-slate-400 rounded-lg font-bold text-slate-800">&#8594;</button>
          </div>
        </div>
        <div className="md:hidden w-full flex flex-row justify-between h-[40vh] px-[10vw]">
          <div className="flex flex-col justify-between h-[30vh] pt-[10vh]">
            <div className="text-slate-300 font-mono font-light pb-6">Info</div>
            <div className="text-white font-mono font-normal pb-2">About</div>
            <div className="text-white font-mono font-normal pb-2">Pricing</div>
            <div className="text-white font-mono font-normal pb-2">Blog</div>
            <div className="text-white font-mono font-normal pb-2">Documentation</div>
          </div>
          <div className="flex flex-col justify-between h-[30vh] pt-[10vh]">
            <div className="text-slate-300 font-mono font-light pb-6">Products</div>
            <div className="text-white font-mono font-normal pb-2">Gromacs</div>
            <div className="text-white font-mono font-normal pb-2">Plorus App</div>
            <div className="text-white font-mono font-normal pb-2">AI assistant</div>
          </div>
          <div className="flex flex-col justify-between h-[30vh] pt-[10vh]">
            <div className="text-slate-300 font-mono font-light pb-6">Contact Us</div>
            <div className="text-white font-mono font-normal pb-2">Instagram</div>
            <div className="text-white font-mono font-normal pb-2">Discord</div>
            <div className="text-white font-mono font-normal pb-2">Twitter</div>
            <div className="text-white font-mono font-normal pb-2">Linkedin</div>
          </div>
          <div className="flex flex-col justify-left h-[30vh] pt-[10vh]">
            <div className="text-slate-300 font-mono font-light pb-6">Legal</div>
            <div className="text-white font-mono font-normal pb-2">Terms of Use</div>
            <div className="text-white font-mono font-normal pb-2">Privacy Policy</div>
          </div>
        </div>
        <div>
          <div className="my-4 border-t border-t-volcanic-800 "></div>
            <div className="md:px-2 px-12 flex flex-row justify-between text-white ">
              <div className="flex flex-row justify-between md:hidden">
                <div className="pl-2 pr-2">
                  © 2023 Plorus
                </div>
                <div className="pl-2 pr-2">
                  Privacy
                </div>
                <div className="pl-2 pr-2">
                  Terms of Use
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="pl-2 pr-2">
                  Twitter
                </div>
                <div className="pl-2 pr-2">
                  Linkedin
                </div>
                <div className="pl-2 pr-2">
                  Discord
                </div>
                <div className="pl-2 pr-2">
                  Instagram
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer;