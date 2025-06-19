import React from 'react'
import { LuPopcorn } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-[#222831] w-dvw  flex items-center text-white place-content-between p-4 font-megrim font-bold uppercase'>
      <Link to={"/"} className='group w-1/4  flex items-center justify-center   animate' ><LuPopcorn size={50} className='shadow-white group-hover:shadow-lg group-hover:-rotate-12 group-hover:text-[#00ADB5] animate' /><p className='text-3xl group-hover:text-4xl animate group-hover:translate-x-2 group-hover:text-[#00ADB5]'>Movies</p></Link>
      <div className='flex  w-1/4 place-content-around text-2xl'>
        <Link to={"/"} className='bg-[#222831] px-1 font-bold   scale-[0.7]  hover:scale-[0.8] animate rounded-lg  hover:px-3 hover:text-[#222831] hover:bg-[#00ADB5]'>Home</Link>
        <Link to={"/liked"} className='bg-[#222831] px-1 font-bold   scale-[0.7]  hover:scale-[0.8] animate rounded-lg  hover:px-3 hover:text-[#222831] hover:bg-[#00ADB5] '>Favorites</Link>
        <div className='bg-[#222831] px-1 font-bold  scale-[0.7]  hover:scale-[0.8] animate rounded-lg  hover:px-3 hover:text-[#222831] hover:bg-[#00ADB5]'>dark</div>
      </div>
    </div>
  )
}

export default NavBar
