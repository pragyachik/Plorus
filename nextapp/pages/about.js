import Link from "next/link"

const About = () => {
  return (
    <>
      <div className="AboutBackground">
      <h1>About</h1>
      <p>This is the Plorus app</p>
      <p>Danger! Under Construction. Please wear hard hat</p>
      <Link href="/"><a className="backHome">Back to Home</a></Link>
      </div>
    </>
  )
};

export default About;