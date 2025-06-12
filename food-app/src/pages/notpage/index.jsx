import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='h-2/4 flex justify-center items-center flex-col' >
      <img className=' h-[500px]' src="/notfound.jpg" alt="" />
      <p>PAGE NOT FOUND</p>
      <Link to='/'> Go Back</Link>
    </div>
  )
}

export default index
