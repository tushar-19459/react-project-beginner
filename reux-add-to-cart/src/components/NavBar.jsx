import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';

const NavBar = () => {

  const [search, setSearch] = useState('')

  const cartItems = useSelector(state => state.cart)

  function handleSearch(item) {
    console.log(item)
  }

  return (
    <div className='flex  h-20  items-center  justify-between '>
      <Link to='/' className=' ml-5 '>SHOPING APP</Link>
      <form onSubmit={handleSearch} className=' w-2/6'>
        <input value={search} className='shadow-2xl border w-full border-black pl-2 h-8 rounded-xl' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search...' name="" id="" />
      </form>
      <div className='flex mr-5 space-x-4'>
        <Link  to="/">HOME</Link>
        <Link className='relative ' to="/cart" >{cartItems.length>0 && <div className='h-4 w-4 opacity-100 absolute rounded-full bg-red-500 text-white text-[10px] text-center ' >{cartItems.length}</div>}<GiShoppingCart size={30} /></Link>
      </div>
    </div>
  )
}

export default NavBar
