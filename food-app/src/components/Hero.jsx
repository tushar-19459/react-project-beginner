import React from 'react'
import { ConsumeContext } from '../context'
import Loading from './Loading'
import ErrorMsg from './Error'
import { Link } from 'react-router-dom'
const Hero = () => {

    const { data, loading, error, fav, setFav, addfav } = ConsumeContext()


    console.log(fav)

    return (
        <>
            <Loading></Loading>
            <ErrorMsg></ErrorMsg>
            {!data && !loading && !error &&<h1 className=" w-dvw text-[60px] font-bold text-center">SEARCH A FOOD ITEM</h1>}
            {data && data.length &&
                data.map((item) =>
                    <div className='flex flex-col hover:shadow-2xl rounded-xl duration-300 border border-black shadow-black items-center justify-center   h-[300px] m-3 hover:h-[302px] ' key={item.id}>
                        <Link to={`/details/${item.id}`} className='rounded-2xl overflow-hidden h-[160px] w-[250px]   '>
                            <img className='cover ' src={item.image_url} alt="" />
                        </Link>
                        <div className='flex flex-col   w-full self-start'>
                            <p className='pl-5 m-1 text-blue-600'>{item.publisher}</p>
                            <p className='pl-5 m-1'>{item.title}</p>
                            <button onClick={() => addfav(item.id)} className='self-center bg-black w-2/3 h-8 rounded-xl hover:shadow-2xl duration-300 shadow-black text-white hover:text-black hover:bg-white hover:border-black hover:border'>Add to Favorites {fav.includes(item.id) ? "❤️" : null}</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Hero
