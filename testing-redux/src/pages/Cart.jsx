import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemsFromCart, updateItemCount } from '../store/cart-slice/cartslice'
import Emptycart from '../components/Emptycart copy'
import { ContextConsumer } from '../context/Context'

const Cart = () => {

  const storeitems = useSelector(state => state.cart)
  const [Total, setTotal] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    setTotal(storeitems.reduce((acc, current) => acc + current.price * current.count, 0))
  }, [storeitems])

  function handleremove(item) {
    dispatch(removeItemsFromCart(item))
  }

  function updateCount(item, type, quantity) {
    if (type === '-') {
      dispatch(updateItemCount({ id: item.id, count: --quantity }));
    } else {
      dispatch(updateItemCount({ id: item.id, count: ++quantity }));
    }
  }

  return (
    <div className=" w-dvw">
      <NavBar></NavBar>
      {storeitems.length === 0 &&
        <Emptycart ></Emptycart>
      }
      {storeitems.map((item) => (

        <div key={item.id} className="pt-20 grid grid-cols-4  h-32 ">
          <div className="border-r flex justify-center items-center">
            <img className="h-20" src={item.images[0]} alt={item.title} />
          </div>

          <div className="   flex p-5 place-content-between items-center col-span-3">
            <div className=" flex pl-4 items-center  h-full place-content-between  w-1/2 overflow-hidden">
              <p className="font-bold ">{item.title}</p>
              <button className=' bg-black  rounded text-white h-8 w-20 hover:bg-white duration-300 ease-in border-black hover:text-black border ' onClick={() => handleremove(item.id)} >remove</button>
            </div>

            <div className='flex space-x-3 w-15 '>
              <button onClick={() => updateCount(item, "-", item.count)}>-</button>
              <div className=' w-6 text-center h-6'>{item.count}</div>
              <button onClick={() => updateCount(item, "+", item.count)}>+</button>
            </div>

            <div className='font-bold' >$ {(item.price * item.count).toFixed(2)}</div>
          </div>
        </div>
      ))}
      {storeitems.length > 0 && <div className=' text-right m-4 font-bold'>Total : $ {(Total).toFixed(2)}</div>}
    </div>
  )
}

export default Cart