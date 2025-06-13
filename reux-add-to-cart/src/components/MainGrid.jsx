import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addtoc } from '../store/store-slice/cart-slice';

const MainGrid = ({ data }) => {

    const dispatch = useDispatch()

    function handleaddtocart(item) {
        dispatch(addtoc(item))
    }

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 max-sm:grid-cols-2 h-dvh w-full ">
                {data && data.map((item) =>
                    <div className='flex rounded-xl justify-center m-3 items-center flex-col border border-gray-500 w-4.7/5 h-5/5 hover:shadow-2xl duration-300 ' key={item.id}>
                        <div className='flex  h-2/3 justify-center items-center'>
                            <img src={item.image} className=' h-2/3 cover' alt="" />
                        </div>
                        <div className="  flex w-full justify-center h-1/5 space-x-10 items-center ">
                            <div>
                                <p>{(item.title).split(/[\s/\\]+/).slice(0, 3).join(" ")}</p>
                                <button className='bg-black text-white border rounded-xl w-3/4 h-7 m-2 hover:bg-white hover:text-black duration-300 ease-in hover:border-black' onClick={() => handleaddtocart(item)}>Add to Cart</button>
                            </div>

                            <div className=' w-1/4'>
                                <div className='flex justify-center items-center'>
                                    <FaStar className='text-yellow-300 ' /><div>{item.rating.rate}</div>
                                    <p>({item.rating.count})</p>
                                </div>
                                <div className='text-center'>
                                    <p className='font-bold'>₹{item.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainGrid
