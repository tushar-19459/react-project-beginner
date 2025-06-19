import React from 'react'
import { UseContext } from '../context/context'

const Footer = () => {
    const { data, setPage, page, totalPage,scroll } = UseContext()

    function movetotop() {
        console.log("this is move")
        scroll.current?.scrollIntoView({behavior: "smooth" });
    }

    return (
        <div onClick={movetotop} className="flex test p-4 font-bold  text-white bg-[#222831] w-dvw justify-center ">
            <div className="flex place-content-between test1 items-center  ">
                <div className=" border border-[#00ADB5]  p-1 rounded-md m-2 scale-[0.7] text-center animate h-8 hover:px-3 hover:text-[#222831] hover:scale-[0.8] hover:bg-[#00ADB5]" onClick={() => setPage(1)}>start</div>

             
                {page !== 100 && data?.slice(0, 3).map((_, index) => {
                    return <div key={index} className="border border-[#00ADB5]  w-10 m-1 animate  hover:px-3 hover:text-[#222831] hover:scale-[0.8] hover:bg-[#00ADB5] scale-[0.7] rounded-md text-center" onClick={() => setPage(page + index)}>{page + index}</div>
                }
                )}
            </div>
            <div className=" self-center">......</div>
            <div className=" border border-[#00ADB5]  p-1 rounded-md m-2 scale-[0.7] text-center animate  hover:px-3 hover:text-[#222831] hover:scale-[0.8] hover:bg-[#00ADB5]" onClick={() => setPage(totalPage)}>{totalPage}</div>
        </div>
    )
}

export default Footer
