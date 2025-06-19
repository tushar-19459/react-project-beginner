import React from 'react'
import Card from './Card'




const Slide = ({ data }) => {

    function handleDetails(id) {
        console.log("calling handle dertails")
        return <Card id={id}></Card>
    }

    return (
        <div className=" bg-[#222831]  h-[85%] w-dvw flex overflow-x-auto  space-x-5 p-3  scrollbar-hide">
            {data?.slice(0, 10).map((item, index) => (
                <div onClick={() => handleDetails(item.id)}
                    className=" hover:shadow-md border  hover:border-[#00ADB5] hover:shadow-[#00ADB5] animate flex-shrink-0 w-1/4 bg-[#393E46] rounded-2xl "
                    key={index}
                >
                    <div className=' relative h-3/4 m-3'>
                        <div className='absolute text-6xl m-4 font-oxanium font-bold bottom-0'>{index + 1}</div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={item.title}
                            className=" object-cover h-full w-full rounded-2xl"
                        />
                    </div>
                    <div className="p-2 font-oxanium font-bold">
                        <div className='flex items-center place-content-between'>
                            <p className="font-semibold truncate text-xl">{item.title}</p>
                            <p className="text-sm">⭐ {item.vote_average.toFixed(1)}</p>
                        </div>
                        <p className="text-sm text-gray-400">{item.release_date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Slide
