import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
    return (
        <div className="flex justify-center w-dvw h-dvh items-center" >
            <AiOutlineLoading3Quarters size={150} className="relative animate-spin" />
            <div className="absolute text-xl font-bold">Loading...</div>
        </div>
    )
}

export default Loading
