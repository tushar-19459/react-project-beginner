import { useSelector } from 'react-redux'
import MainGrid from '../components/MainGrid';

const Cart = () => {
  const cartItems = useSelector(state=>state.cart)
  return (
    <div className='overflow-y-hidden'>
    {!cartItems.length>0 && 
    <div className=' h-2/3 flex  flex-col justify-center items-center	overflow-x-hidden	overflow-y-hidden'>
      <div className=' h-[250px]'>
      <img className='h-full' src="notfound.jpg" alt="" />
      </div>
      <h1 className='text-[50px] font-bold'>Cart is empty</h1>
    </div> }
    <MainGrid data={cartItems}/>
    </div>
  )
}

export default Cart
