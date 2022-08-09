import Link from 'next/link'

const contact_us = () => {
  return (
    <div className='flex flex-col w-full ml-auto'>
      <div className='flex flex-col justify-center items-center pt-32 w-10/12 ml-auto bg-right-bottom bg-[url("../public/bnr1.jpg")]'>
        <h2 className='text-white font-bold text-6xl p-3'>CONTACT US</h2>
        <span className='text-yellow-100 font-bold text-xl pb-5'>CafeZone cafe & restaurant</span>
        <h5 className='text-white text-xl pb-20'><Link href='/'><a>HOME</a></Link> &gt; CONTACT US</h5>
      </div>
      <div className='flex w-full'>
        <div className='flex bg-gray-200 w-10/12 ml-auto pb-20 pt-20'>
          <div className='flex flex-col w-6/12 mr-5 text-center justify-end'>
            <span className='text-orange-600 text-xl w-fit m-auto'>Have a question?</span>
            <h3 className='text-6xl border-b-gray-300 w-fit m-auto border-b-2 p-10'>MAIL US</h3>
            <form className='flex flex-col mt-10 w-9/12 m-auto'>
              <input className='mb-2 rounded-sm p-4 text-sm' placeholder='Your Name' type='text'/>
              <input className='mb-2 rounded-sm p-4' placeholder='Your Email Id' type='email'/>
              <input className='mb-2 rounded-sm p-4' placeholder='Phone' type='number'/>
              <textarea className='mb-2 rounded-sm h-36 p-4' placeholder='Your Message ...'></textarea>
              <button type='submit' className='w-full bg-gray-800 rounded-sm hover:bg-orange-400 text-gray-200 p-3 resize-x'>Submit</button>
            </form>
          </div>
          <div className='flex w-6/12 h-full'>
            <div className='bg-[url("../public/pic6.jpg")] bg-no-repeat bg-right w-7/12 h-full rounded-sm'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default contact_us
