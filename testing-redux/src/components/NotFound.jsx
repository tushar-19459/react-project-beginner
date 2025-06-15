import { ContextConsumer } from "../context/Context";

const NotFound = () => {

    console.log("in search")
    const { search } = ContextConsumer()
    console.log(search)
    return (
        <div className="flex justify-center w-dvw h-40 pt-20 items-center" >
            <div className=" text-10 font-bold">Product Not found </div>
            <img src="no-order.png" className="m-3 h-20" />
        </div>
    )
}

export default NotFound
