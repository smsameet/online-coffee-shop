import Link from "next/link";
import {useState} from 'react'

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const openMenuPages = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='bg-[url("../public/sidebar.jpg")] w-2/12 lg:block hidden'>
      <Link href='/'><a><img src='/logo.png' className='m-auto p-5 border-stone-600 border-b-2' /></a></Link>
      <nav className='text-center text-white'>
        <Link href='/'><a className='block p-4 text-orange-400'>HOME</a></Link>
        <button id='pagesButton' className='p-4 hover:text-orange-400' onClick={openMenuPages}>PAGES</button>
        {showMenu && (
          <nav className='text-center text-gray-400' id='pages'>
            <Link href='/'><a className='block p-4 hover:text-orange-400' >ABOUT US</a></Link>
            <Link href='/'><a className='block p-4 hover:text-orange-400' >COMING SOON</a></Link>
            <Link href='/'><a className='block p-4 hover:text-orange-400' >ERROR 404</a></Link>
          </nav>
        )}
        <Link href='/menu'><a className='block p-4 hover:text-orange-400' >MENU</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-400' >GALLERY</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-400' >CONTACT US</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-400' >RESERVATION</a></Link>
      </nav>
    </div>
  )
}

export default SideBar
