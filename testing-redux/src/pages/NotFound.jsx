import { TbError404 } from "react-icons/tb";

const NotFound = () => {
    return (
        <div className="font-bold w-dvw  text-xl h-dvh overflow-hidden flex items-center justify-center flex-col">
            <TbError404 size={250}/>
            PAGE NOT FOUND 
        </div>
    )
}

export default NotFound
