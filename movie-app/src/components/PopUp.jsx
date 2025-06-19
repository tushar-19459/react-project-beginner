import React from 'react'
import { UseContext } from '../context/context'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoFav } from '../Store/favorites/FavoritesSlice';

const PopUp = () => {

    const { loading, error, setShow, show, details } = UseContext()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favitems = useSelector(state => state.favorite)

    function handleLike(item) {
        dispatch(addtoFav(item))
    }


    function closePopUP() {
        setShow(false)
        navigate("/")
    }

    return (
        <div className=' backdrop-blur-md h-full' >
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} className='absolute overflow-x-hidden w-full h-full object-cover z-0 opacity-[0.4]' alt="" />
            {show &&
                <div className=' z-50 overflow-hidden' >
                    <div className='flex'>
                        <div className=' z-50 absolute text-black hover:text-red-500 animate  '>
                            <IoIosCloseCircle className=' ' size={50} onClick={() => closePopUP()} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-bold text-black opacity-1 2xl:opacity-0 xl:opacity-0 md:opacity-0 sm:opacity-1'>
                        <p className='text-4xl  '>{details.title}</p>
                        <p className='text-1xl self-end'>⭐{details.vote_average.toFixed(1)}</p>
                    </div>
                    <div className='grid grid-cols-2 items-center h-screen max-sm:grid-cols-1 max-sm:overflow-y-auto '>
                        <div className='flex justify-center  items-center w-full h-screen '>
                            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className='z-50  h-5/6 rounded-xl' alt="" />
                            <p></p>
                        </div>
                        <div className='  flex text-black   flex-col w-full h-full ' >

                            <div className='text-3xl  h-full  font-bold z-10 m-4 '>
                                <div className='flex place-content-between items-center max-md:opacity-0 '>
                                    <p className='text-4xl  '>{details.title}</p>
                                    <p >⭐{details.vote_average.toFixed(1)}</p>
                                </div>
                                <div className='mt-5  z-50 '>
                                    <p className='m-4 '>Original Language : "{details.original_language}" </p>
                                    <p className='text-justify'>{details.overview}</p>
                                </div>
                                <div className='flex w-full  justify-center font-normal p-3 '>
                                    <button className='bg-[#222831] min-h-2/3 text-white w-2/3 px-1 font-bold  min-h-16 scale-[0.8]   animate rounded-lg  hover:px-3 hover:text-[#222831] hover:scale-[0.9] hover:bg-[#00ADB5] ' onClick={() => handleLike(details)} > {favitems.some((item) => item.id === details.id) ? 'Remove From Favorites' : 'Add to Favorites'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default PopUp