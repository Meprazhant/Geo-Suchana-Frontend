import Image from 'next/image'
import Navbar from './comonents/Navbar'
import Landing from './comonents/Homepage/Landing'
import Getloc from './comonents/Homepage/Getloc'
import Features from './comonents/Homepage/Features'

export const metadata = {
  title: "Geosuchana",
  description: "Geosuchana is a platform for geospatial data and analysis.",
  image: "/images/og.png",

}

export default function Home() {

  return (
    <main className="flex  flex-col ">
      <Landing />
      <Getloc />
      <Features />
    </main>
  )
}
