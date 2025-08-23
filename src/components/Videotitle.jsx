import React from 'react'

function Videotitle({title, overview}) {

console.log(title)
  return (

    <div className='w-screen aspect-video pt-60 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=' '>
            <button className='p-4 text-white px-10 bg-gray-500 bg-opacity-50 rounded-lg'>▶ Play</button>
            <button className='p-4 text-white px-10 bg-gray-500 bg-opacity-50 rounded-lg mx-2'>More Info</button>
        </div>
    </div>
  )
}

export default Videotitle