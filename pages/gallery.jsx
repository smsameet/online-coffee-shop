import Link from 'next/link'

const gallery = () => {
  return (
    <div className='w-10/12 flex flex-col ml-auto justify-center items-center'>
      <div className='flex flex-col justify-center items-center pt-32 w-full ml-auto bg-right-bottom bg-[url("../public/bnr1.jpg")]'>
        <h2 className='text-white font-bold text-6xl p-3'>GALLERY</h2>
        <span className='text-yellow-100 font-bold text-xl pb-5'>CafeZone Gallery</span>
        <h5 className='text-white text-xl pb-20'><Link href='/'><a>HOME</a></Link> &gt; GALLERY</h5>
      </div>
      <div className='grid grid-cols-4 gap-5 w-7/12 pt-20 pb-20'>
        <figure className='grid col-start-1 col-end-2 row-start-1 row-end-2'>
          <img src='/pic1.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-2 col-end-3 row-start-1 row-end-2'>
          <img src='/pic2.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-1 col-end-2 row-start-2 row-end-2'>
          <img src='/pic3.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-2 col-end-3 row-start-2 row-end-3'>
          <img src='/pic4.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>

        <figure className='grid col-start-1 row-start-3 col-span-2 row-end-4'>
          <img src='/pic5.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>

        <figure className='grid col-start-3 row-start-3 col-span-2 row-end-4'>
          <img src='/pic5.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>

        <figure className='grid col-start-3 col-end-4 row-start-1 row-end-2'>
          <img src='/pic1.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-4 col-end-5 row-start-1 row-end-2'>
          <img src='/pic2.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-3 col-end-4 row-start-2 row-end-2'>
          <img src='/pic3.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
        <figure className='grid col-start-4 col-end-5 row-start-2 row-end-3'>
          <img src='/pic4.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>

        <figure className='grid col-start-3 row-start-3 col-span-2 row-end-4'>
          <img src='/pic5.jpg' className='rounded-lg hover:opacity-70 object-cover block'/>
        </figure>
      </div>
    </div>
  )
}

export default gallery
