import React from 'react'
import { ConsumeContext } from '../context'

const NavBar = () => {

    const { search, setSearch } = ConsumeContext()
    console.log(search)
    return (
        <div className='flex border border-black h-20  items-center  justify-between '>
            <h1 className='ml-5'>FoodRecipe</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='border w-2/6 border-black pl-2 h-8 rounded-xl' placeholder='search...' name="" id="" />
            <div className='flex mr-5 space-x-4'>
                <p>Home</p>
                <p>Favorites</p>
            </div>

        </div>
    )
}

export default NavBar
