import Link from "next/link"

const menu = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col justify-center items-center pt-32 w-10/12 ml-auto bg-right-bottom bg-[url("../public/bnr1.jpg")]'>
        <h2 className='text-white font-bold text-6xl p-3'>OUR MENU</h2>
        <span className='text-yellow-100 font-bold text-xl pb-5'>SELECT MENU BELOW:</span>
        <h5 className='text-white text-xl pb-20'><Link href='/'><a>HOME</a></Link> &gt; MENU</h5>
        <button type='button' className='flex text-white bg-orange-400 p-2 items-center font-bold text-xl'>
          <img src='/icon5.png' width='30' height='30' className='mr-2'/>
          <div className='flex flex-col text-start'>
            <span>COFFEE</span>
            <span className='text-sm font-light'>COFFEE & CAPPUCCINO</span>
          </div>
        </button>
      </div>
      <div className='flex justify-center items-center w-10/12 ml-auto bg-gray-200'>
        <div className='grid grid-cols-2 w-7/12 mt-20 mb-20'>
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
      </div>
      <div className='bg-[url("../public/bg1.jpg")] bg-no-repeat bg-right-top w-10/12 ml-auto pb-16'>
        <div className='flex flex-col h-fit justify-center items-center pt-24 pb-24'>
          <h2 className='text-5xl font-bold'>EVER TRIED THESE?</h2>
          <span className='text-xl font-bold text-stone-500 opacity-50'>THESE ARE OUR SPECIALS:</span>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default menu
