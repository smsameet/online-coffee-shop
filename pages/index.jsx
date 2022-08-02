const index = () => {
  return (
    <div className='bg-[url("../public/slide.jpg")] flex flex-col w-full relative h-96 md:h-screen bg-cover md:bg-center bg-right'>
      <div className='text-orange-400 font-bold flex flex-col mt-auto w-full items-center justify-center'>
        <span className='text-2xl font-medium'>Cafe & Restaurant</span>
        <h2 className='text-8xl text-white'>WELCOME!</h2>
        <h3 className='text-4xl text-white'>THE BEST COFFEE IN LONDON</h3>
      </div>
      <div className='flex mb-auto items-center justify-center font-bold'>
        <button className='mt-10 mr-5 p-5 rounded-sm text-white text-sm bg-orange-400 hover:bg-orange-500'>MORE ABOUT US</button>
        <button className='mt-10 p-5 rounded-sm text-white text-sm bg-gray-800 hover:bg-gray-900'>RESERVE A TABLE!</button>
      </div>
    </div>
  )
}

export default index
