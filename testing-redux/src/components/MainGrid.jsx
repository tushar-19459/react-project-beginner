import { FaStar } from "react-icons/fa";
import { addItemsToCart } from "../store/cart-slice/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const MainGrid = ({ data }) => {
    const navigate = useNavigate() 
    const reucer = useDispatch()
    const storeitems = useSelector(state=>state.cart)

    function handleAddToCart(item) {
        const temp = storeitems.some((produce)=>
            produce.id === item.id
        ) 
        if(!temp){

            reucer(addItemsToCart(item))
        }
    }

    function handleclick(itemid) {
        console.log(itemid)
        navigate(`/details/${itemid}`)
    }

    return (
        <div >
            <div className='pt-20 grid grid-cols-4 max-sm:grid-cols-2'>
                {data && data.length > 0 && data.map((item) =>
                    <div key={item.id} className='border border-black rounded-xl font-bold m-2 shadow-xl duration-300 ease-in hover:shadow-black '>
                        <div>
                            <img src={item.images[0]} onClick={()=>handleclick(item.id)} alt={item.title}></img>

                            <div onClick={()=>handleclick(item.id)} className='flex m-1 border-t border-black items-center place-content-between'>
                                <div>{item.title}</div>
                                <div className='flex  justify-end m-1 items-center w-1/2'>
                                    <FaStar className='text-yellow-400' />{item.rating}
                                </div>
                            </div>

                            <div className='flex place-content-between  m-3'>
                                <button className='text-white bg-black w-2/4 rounded border hover:text-black hover:bg-white border-black' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                                <div>$ {item.price}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MainGrid
