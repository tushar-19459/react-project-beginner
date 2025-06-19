import React from 'react'
import { UseContext } from '../context/context'
import { IoIosCloseCircle } from "react-icons/io";

const PopUp = () => {

    const { loading, error, setShow, show, details } = UseContext()
    console.log(details)
    return (
        <div className=' backdrop-blur-md h-full' >
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} className='absolute overflow-x-hidden w-full z-0 opacity-[0.4]' alt="" />
            {show &&
                <div className=' z-50 overflow-y-hidden' >
                    <div className='flex   place-content-between m-4 items-center'>
                        <div className='text-4xl z-50 font-bold text-white'>
                            
                        </div>
                        <div className='text-xl z-50 font-bold text-white ml-7 '>
                            <IoIosCloseCircle className=' ' size={50} onClick={() => setShow(false)} />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='flex items-center '>
                        <div className='flex flex-col justify-center items-center '>
                            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className='z-50  h-2/3 w-2/3 ml-10' alt="" />
                            <p></p>
                        </div>
                        <div className='  flex text-white flex-col w-2/3 h-[500px]' >
                           <div className='text-3xl font-bold z-10'>
                            <div className='flex place-content-between items-center m-5'>
                                <p className='text-4xl -webkit-text-stroke: 1px black; '>{details.title}</p> 
                                <p clas>⭐{details.vote_average.toFixed(1)}</p> 
                            </div>
                            <div className='mt-5  z-50 m-5'>
                                <p className='text-yellow-950 '>Original Language : {details.original_language} </p>
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
