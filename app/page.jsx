import Image from 'next/image'
import picture from '../public/github-logo.png'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image
        src={picture}
        alt='Picture of the author'
        width={250}
        height={250}
        layout='resposive'
      />
    </div>
  )
}

export default Home
