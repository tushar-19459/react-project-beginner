import React, { useEffect, useState } from 'react'
import { removeFromCart, updateQuantity } from '../store/store-slice/cart-slice'
import { useDispatch, useSelector } from 'react-redux';

const Cartbilling = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart);
    const [Total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cartItems.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0))
    }, [cartItems])

    function handleremove(itemid) {
        console.log(itemid)
        dispatch(removeFromCart(itemid))
    }

    function updatecount(id, op, newquantity) {
        op === '+' ? newquantity++ : newquantity--
        console.log("this is new " + newquantity)
        dispatch(updateQuantity({ id, quantity: newquantity }))
    }

    return (
        <div className="border w-dvw">
            {cartItems.map((item) => (

                <div key={item.id} className="grid grid-cols-4  h-32 ">
                    <div className="border flex justify-center items-center">
                        <img className="h-20" src={item.image} alt={item.title} />
                    </div>

                    <div className="border flex p-5 place-content-between items-center col-span-3">
                        <div className=" flex pl-4 items-center flex-col h-full place-content-between   w-1/2 overflow-hidden">
                            <p className="">{item.title}</p>
                            <button className='border bg-black rounded text-white h-8 w-20 hover:bg-white duration-300 ease-in border-black hover:text-black' onClick={() => handleremove(item.id)} >remove</button>
                        </div>

                        <div className='flex space-x-3 w-15 '>
                            <button onClick={() => updatecount(item.id, '-', item.quantity)}>-</button>
                            <div className='border w-6 text-center h-6'>{item.quantity}</div>
                            <button onClick={() => updatecount(item.id, '+', item.quantity)}>+</button>
                        </div>

                        <div >$ {(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
            ))}
            <div className=' text-right m-4'>Total : {Total.toFixed(2)}</div>
        </div>
    )
}

export default Cartbilling
