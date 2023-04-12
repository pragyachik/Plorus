import Carousel from "./Carousel"
import Button from "./Button"

export default function OldIndex () {
  return (
    <div className={plorusStyles.container}>
      <nav>
        <div className="navlinks-left">
        <Link href="/about"><a>About</a></Link>
        {/* <Link href="/users"><a>Users List</a></Link> */}
        </div>
        <div className='navlinks-right'>

        </div>
      </nav>
      <h1 className="font-mono text-blue-600">Homepage</h1>
      
      <Carousel />
      {/* <Button /> */}
    </div>
  )
}