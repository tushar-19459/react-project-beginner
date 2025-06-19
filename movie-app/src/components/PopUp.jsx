import React from 'react'
import { UseContext } from '../context/context'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const PopUp = () => {

    const { loading, error, setShow, show, details } = UseContext()
    const navigate = useNavigate()
    console.log(details)

    function closePopUP() {
        setShow(false)
        navigate("/")
    }

    return (
        <div className=' backdrop-blur-md h-screen overflow-hidden' >
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} className='absolute overflow-x-hidden w-full z-0 opacity-[0.4]' alt="" />
            {show &&
                <div className=' z-50 overflow-y-hidden' >
                    <div className='flex   place-content-between m-4 items-center'>
                        <div className='text-4xl z-50 font-bold text-white'>

                        </div>
                        <div className='text-xl z-50 font-bold text-black hover:text-red-500 animate ml-7 '>
                            <IoIosCloseCircle className=' ' size={50} onClick={() => closePopUP()} />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='flex items-center '>
                        <div className='flex flex-col justify-center items-center '>
                            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className='z-50  h-2/3 w-2/3 ml-10' alt="" />
                            <p></p>
                        </div>
                        <div className='  flex text-black flex-col w-2/3 h-[500px]' >
                            <div className='text-3xl font-bold z-10'>
                                <div className='flex place-content-between items-center m-5'>
                                    <p className='text-4xl -webkit-text-stroke: 1px black; '>{details.title}</p>
                                    <p clas>⭐{details.vote_average.toFixed(1)}</p>
                                </div>
                                <div className='mt-5  z-50 m-5'>
                                    <p className='text-yellow-950 pb-4'>Original Language : "{details.original_language}" </p>
                                    {details.overview}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default PopUp
