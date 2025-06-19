import React from 'react'
import NavBar from '../components/NavBar'

const PageNotFound = () => {
  return (
    <div className='h-dvh bg-[#222831] w-dvh overflow-hidden' >
      <NavBar></NavBar>
      <div className='flex flex-col h-1/2 justify-center items-center w-full'>
        <img src="/notfound.png" className='h-3/4' alt="" />
        <p className='font-bold text-red-500 uppercase text-2xl'> The Page DoesNot Existes</p>
      </div>
    </div>
  )
}

export default PageNotFound
