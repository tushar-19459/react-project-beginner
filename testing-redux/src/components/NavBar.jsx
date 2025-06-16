import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import { LiaStoreAltSolid } from "react-icons/lia";
import { ContextConsumer } from '../context/Context';
import { useSelector } from 'react-redux';


const NavBar = () => {

  const cartitems = useSelector(state=>state.cart)
  const { setSearch, search,handlesearch } = ContextConsumer()

  return (
    <div className=' fixed h-20 backdrop-blur-md flex items-center w-dvw place-content-between'>
      <div className=' z-10 text-center w-1/6  flex items-center justify-center'><Link to='/'><LiaStoreAltSolid size={40} /></Link></div>
      <div className=' w-1/4'>
        <form action="" onSubmit={(e) => handlesearch(e)}>
          <input type="text" value={search} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} className='p-3 border-black border w-full  rounded-xl' />
        </form>
      </div>
      <div className='  items-center justify-end text-[25px] mr-3 w-1/5 flex '>
        <Link to='/' className='mr-3' >Home</Link>
        <div className='realative mr-6'>
          {cartitems.length > 0 && <div className='absolute  text-[10px] bg-red-600 text-white rounded-full h-4 w-4 text-center'>{cartitems.length}</div>}
          <Link to='/cart'><GiShoppingCart size={40} /></Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
