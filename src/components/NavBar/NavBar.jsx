import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <nav className='cursor-pointer'>
        <div className='pl-8 text-3xl text-cyan-400'>
            <h1>DEFI</h1>
        </div>
        <ul className={nav ? "block" : "right-[100%]"}>
            <li>Home</li>
            <li>Developers</li>
            <li>Contact</li>
            <li>About</li>
            <button>Get Started</button>
        </ul>
        <div className='block md:hidden cursor-pointer' onClick={handleNav}>
          {nav ? <FontAwesomeIcon icon={faXmark} className='fa-2x text-white' /> : <FontAwesomeIcon icon={faBars} className='fa-2x text-white' />}
        </div>
    </nav>
  )
}

export default NavBar