
const Footer = () => {
  return (
    <>
      <div className="h-[70vh] w-full bg-gray-800 pt-8 pb-8 flex flex-col justify-between px-12">
        <div className="pl-12 pr-12 w-full flex flex-row justify-between h-[55vh]">
          
        </div>
        <div className="my-4 border-t border-t-volcanic-800 md:hidden "></div>
        <div className="pl-12 pr-12 flex flex-row justify-between text-white md:hidden ">
          <div className="flex flex-row justify-between">
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
    </>
  )
}

export default Footer;