import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const ToggleButton = dynamic(() => import('./toggleButton'), { ssr: false })


const Navbar = () => {
  return (
    <header className="relative mb-14 flex flex-row place-content-between">
      <Link className="font-black inline-block text-2xl opacity-100 transition-transform duration-200 ease-in-out delay-0 transform" href="/">
        <span className="gradient-text transition-myColor1 duration-200 ease-out transition-myColor2 duration-200 ease-in-out">overreacted</span>
      </Link>
      <span className="relative top-[4px] italic">
        by Amirhossein 
      </span>
      <ToggleButton />
    </header>
  )
}

export default Navbar