import React, { useEffect, useState } from 'react'
import { ConsumeContext } from '../context'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const { search, setSearch ,handleSearch } = ConsumeContext()

    return (
        <div className='flex  h-20  items-center  justify-between '>
            <Link  to='/' className='opacity-50 duration-300 ml-5 ease-out  hover:opacity-100'>FoodRecipe</Link>
            <form onSubmit={handleSearch} className=' w-2/6'>
                <input value={search} className='shadow-2xl border w-full border-black pl-2 h-8 rounded-xl' onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search...' name="" id="" />
            </form>
            <div className='flex mr-5 space-x-4'>
                <Link className='opacity-50 duration-300 ease-out hover:opacity-100 ' to="/">Home</Link>
                <Link className='opacity-50 duration-300 ease-out hover:opacity-100 ' to="/favorites">Favorites</Link>
            </div>
        </div>
    )
}

export default NavBar
