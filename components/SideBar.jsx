import Link from "next/link";

const SideBar = () => {
  return (
    <div className='bg-[url("../public/sidebar.jpg")] w-96 lg:block hidden'>
      <Link href='/'><a><img src='/logo.png' className='m-auto p-5 border-stone-600 border-b-2' /></a></Link>
      <nav className='text-center text-white'>
        <Link href='/'><a className='block p-4 text-orange-500'>HOME</a></Link>
        <Link href='/'><a className='p-4 hover:text-orange-500'>PAGES +</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-500' >MENU</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-500' >GALLERY</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-500' >CONTACT US</a></Link>
        <Link href='/'><a className='block p-4 hover:text-orange-500' >RESERVATION</a></Link>
      </nav>
    </div>
  )
}

export default SideBar
