import React from 'react'
import { LuPopcorn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { UseContext } from '../context/context';

const NavBar = () => {

  const { search, setSearch, handleSearch, scroll } = UseContext()


  return (
    <>
      {/* <div ref={scroll} className='bg-[#222831]   flex items-center text-white place-content-between  font-megrim font-bold uppercase'> */}
        <div ref={scroll} className='bg-[#222831] w-dvw   flex items-center text-white place-content-between p-4 font-megrim font-bold uppercase'>
        <Link to={"/"} className='group  flex items-center justify-center  animate' ><LuPopcorn size={50} className='shadow-white group-hover:shadow-lg group-hover:-rotate-12 group-hover:text-[#00ADB5] animate' /><p className='text-xl group-hover:text-2xl animate group-hover:translate-x-[0.1] group-hover:text-[#00ADB5]  max-sm:text-md '>Movies</p></Link>

        <div className=' w-1/4  flex items-center justify-center'>
          <form action="" onSubmit={(e) => handleSearch(e)}>
            <input type="text" className='w-full rounded-xl invisible  sm:visible 2xl:visible scale-[0.8] animate bg-[#222831] border text-center hover:scale-[1] hover:border-[#00ADB5] animate  hover:shadow-[#95eaef83]  hover:shadow-md ' placeholder='Search' name="" id="" value={search} onChange={(e)=>setSearch(e.target.value)} />
          </form>
        </div>

        <div className='flex  sm:w-1/4 place-content-around text-2xl'>
          <Link to={"/"} className='bg-[#222831] px-1 font-bold   scale-[0.7]   animate rounded-lg  hover:px-3 hover:text-[#222831] hover:scale-[0.8] hover:bg-[#00ADB5]'>Home</Link>
          <Link to={"/favorites"} className='bg-[#222831] px-1 font-bold   scale-[0.7]  hover:scale-[0.8] animate rounded-lg  hover:px-3 hover:text-[#222831] hover:bg-[#00ADB5] '>Favorites</Link>
          <div className='bg-[#222831] px-1 font-bold  scale-[0.7]  hover:scale-[0.8] animate rounded-lg  hover:px-3 hover:text-[#222831] hover:bg-[#00ADB5]'>dark</div>
        </div>

      </div>
      <div className='bg-[#222831]  flex justify-center items-center '>
      <input type="text" className= ' text-white visible sm:invisible sm:h-0 2xl:h-0 2xl:invisible rounded-full scale-[0.8] animate bg-[#222831] border text-center hover:scale-[1] hover:border-[#00ADB5] animate  hover:shadow-[#95eaef83]  hover:shadow-md ' placeholder="Search" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </>
  )
}

export default NavBar
