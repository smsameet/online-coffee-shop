import Link from 'next/link'

const index = () => {
  return (
    <div className='flex flex-col w-10/12 ml-auto'>
      <div className='bg-[url("../public/slide.jpg")] flex flex-col relative md:h-screen bg-cover md:bg-center bg-right'>
        <div className='text-orange-400 font-bold flex flex-col mt-auto w-full items-center justify-center'>
          <span className='text-2xl font-medium'>Cafe & Restaurant</span>
          <h2 className='text-8xl text-white'>WELCOME!</h2>
          <h3 className='text-4xl text-white'>THE BEST COFFEE IN LONDON</h3>
        </div>
        <div className='flex mb-auto items-center justify-center font-bold'>
          <button className='mt-10 mr-5 p-5 rounded-sm text-white text-sm bg-orange-400 hover:bg-orange-500'><Link href='/#about-us'><a>MORE ABOUT US</a></Link></button>
          <button className='mt-10 p-5 rounded-sm text-white text-sm bg-gray-800 hover:bg-gray-900'><Link href='/'>RESERVE A TABLE!</Link></button>
        </div>
      </div>
      <div className='bg-gray-200 h-auto'>
        <div className='flex flex-col relative h-full justify-center items-center pb-20 pt-20'>
          <span className='text-orange-400 text-xl' id='about-us'>Welcome</span>
          <h2 className='text-gray-700 text-7xl font-bold'>ABOUT US</h2>
          <span className='text-gray-400 text-xl mt-5 pb-10 border-b-gray-300 border-b-2'>CAFE & RESTAURANT</span>
          <p className='w-5/12 text-justify mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <div className='bg-fixed bg-cover bg-[url("../public/bg2.jpg")] w-full relative' style={{ height: 556 }}>
        <div className='flex flex-col relative h-full justify-center items-center pt-24 pb-24'>
          <h2 className='text-5xl text-white font-bold'>DID YOU KNOW?</h2>
          <span className='text-xl text-yellow-100 font-bold'>ABOUT OUR RESTAURANT:</span>
          <div className='flex mb-auto mt-20 items-center justify-center font-bold'>
            <div className='flex flex-col items-center mr-36'>
              <img src='/icon1.png' width='75px'/>
              <span className='text-white mt-10 text-center font-bold'>FAMOUS FOR <br /> OUR COFFEE</span>
            </div>
            <div className='flex flex-col items-center mr-36'>
              <img src='/icon2.png' width='75px'/>
              <span className='text-white mt-10 text-center font-bold'>PHONE <br /> RESERVATIONS</span>
            </div>
            <div className='flex flex-col items-center mr-36'>
              <img src='/icon3.png' width='75px'/>
              <span className='text-white mt-10 text-center font-bold'>OPEN EVERYDAY <br /> 08:00 - 01:00</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/icon4.png' width='75px'/>
              <span className='text-white mt-10 text-center font-bold'>OPEN EVERYDAY <br /> 08:00 - 01:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='bg-[url("../public/bg1.jpg")] bg-no-repeat bg-right-top'>
          <div className='flex flex-col h-fit justify-center items-center pt-24 pb-24'>
            <h2 className='text-5xl font-bold'>OUR MENU</h2>
            <span className='text-xl font-bold text-stone-500 opacity-50'>THESE ARE OUR SPECIALS:</span>
            <span className='text-white bg-orange-400 p-5 mt-10'>COFFEE</span>
            <div className='bg-white grid grid-cols-2 mt-10 w-7/12'>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup1.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup2.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup3.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup1.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup2.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup3.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup1.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup2.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup3.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
              <div className='relative flex border-dashed border-b-2 border-b-gray-400 pb-5 pt-5'>
                <div>
                  <img src='/cup3.png' width='50' className='flex mr-auto drop-shadow-3xl transform rotate-90'/>
                </div>
                <div className='flex flex-col ml-2'>
                  <h3 className='text-lg'>Single Cup Brew</h3>
                  <span className='text-sm italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipiscing</span>
                </div>
                <h5 className='bg-orange-400 text-white rounded-sm p-1 flex items-center ml-2'>$4.50</h5>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='mt-10 p-5 rounded-sm text-white text-sm font-bold bg-gray-800 hover:bg-gray-900'><Link href='/menu'>VIEW OUR COMPLETE MENU</Link></button>
            </div>
          </div>
          <div className='bg-gray-200 h-auto flex justify-center items-center text-center pt-32 pb-32'>
            <div className='flex flex-col w-4/12'>
              <span className='text-orange-400 text-xl font-bold'>Authentic</span>
              <h2 className='text-5xl p-5'>TASTEFUL</h2>
              <span className='text-gray-500 text-xl pb-10 border-b-2 border-gray-300'>CAFE & RESTAURANT</span>
              <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
            </div>
            <div className='flex flex-col w-4/12 ml-10'>
              <div className='grid grid-cols-2 gap-5'>
                <img src='/pic1.jpg' className='rounded-lg hover:opacity-70'/>
                <img src='/pic2.jpg' className='rounded-lg hover:opacity-70'/>
                <img src='/pic3.jpg' className='rounded-lg hover:opacity-70'/>
                <img src='/pic4.jpg' className='rounded-lg hover:opacity-70'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
