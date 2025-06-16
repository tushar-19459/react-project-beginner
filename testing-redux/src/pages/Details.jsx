import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { ContextConsumer } from '../context/Context'
import { useParams } from 'react-router-dom'
import { IoIosCheckboxOutline } from "react-icons/io";
import Loading from '../components/Loading';
import { addItemsToCart } from '../store/cart-slice/cartslice';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
    const props = useParams()
    const { productDetail, loading, handleProductDetails, setProductDetail } = ContextConsumer()
    const storeitems = useSelector(state => state.cart)
    const reucer = useDispatch()

    function handleAddToCart(item, id) {
        const temp = storeitems.some((produce) =>
            produce.id === id
        )
        if (!temp) {
            reucer(addItemsToCart(item))
        }
    }

    useEffect(() => {
        handleProductDetails(props.id)
        return (setProductDetail(null))
    }, [props.id])

    return (
        <>
            <NavBar></NavBar>
            {loading && <Loading />}
            {productDetail &&

                <div className='grid grid-cols-2 max-xl:grid-cols-1 '>
                    <div className=' flex justify-center items-center '><img className='h-4/5' src={productDetail.images[0]} alt="" /></div>
                    <div className='flex flex-col justify-center'>
                        <p className='font-bold text-4xl '>{productDetail.title}</p>
                        <p className='pt-2 text-gray-500'>{productDetail.description}</p>

                        <div className='pt-5 grid grid-cols-2'>
                            <p className='font-bold'>US</p>
                            <p className='text-center font-bold'>Quantity</p>
                            {/* <span></span> */}
                            <span className='font-bold flex  text-3xl items-end' >${productDetail.discountPercentage}<p className='line-through pl-2 text-sm items text-gray-600'>${productDetail.price}</p></span>
                            <div className='font-bold flex  justify-center text-center items-center'>
                                <button className='border w-9 h-full'>-</button>
                                <div className='border flex justify-center items-center w-9 h-full'>1</div>
                                <button className='border w-9 h-full'>+</button>
                            </div>
                            <span className='text-sm text-gray-400 pt-3' >inclusive of all taxes
                            </span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='m-8 bg-black border text-white w-2/3 h-10 rounded hover:bg-white duration-200 ease-in border-black hover:text-black' onClick={() => handleAddToCart(productDetail, productDetail.id)}>Add to Cart</button>

                        </div>
                        <div className='grid  grid-cols-2'>
                            <p className='flex m-4'><IoIosCheckboxOutline size={28} /> Shipping Information : {productDetail.shippingInformation}</p>
                            <p className='flex m-4' ><IoIosCheckboxOutline size={26} /> Availability Status : {productDetail.availabilityStatus} ({productDetail.stock})</p>
                            <p className='flex m-4'><IoIosCheckboxOutline size={26} /> Warranty Information : {productDetail.warrantyInformation}</p>
                            <p className='flex m-4'><IoIosCheckboxOutline size={26} /> Return Policy : {productDetail.returnPolicy}</p>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Details
