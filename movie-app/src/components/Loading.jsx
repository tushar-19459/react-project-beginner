import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {

    return (
        <div className='flex justify-center text-white  items-center w-screen'>
            <div ><AiOutlineLoading size={40} className='animate-spin' /></div>
            <p>Loading...</p>
        </div>

    )
}

export default Loading
