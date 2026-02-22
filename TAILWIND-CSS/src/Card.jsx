import React from 'react'

function Card() {
  return (
    <>
    <div className=' flex justify-center items-center gap-10 w-full h-auto lg: h-screen bg-linear-65 from-green-500 to-blue-500'>
        <div className=' w-full grid md: grid-cols-2 lg:grid-cols-4 gap-10 mx-10 md:mx-20 my-10'>
            <div className=' bg-white rounded-xl shadow-2xl flex flex-col px-10 py-5'>
                <img src='p1.jpeg' className='w-20 sm:w-20 md:w-40 lg:w-58' />
                <span className='text-gray400  font-bold'>JQR</span>
                <h3>Product Images | Free Photos, HD Backgrounds, PNGs, Vectors & Mockups - rawpixel</h3>
                <p> </p>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Card