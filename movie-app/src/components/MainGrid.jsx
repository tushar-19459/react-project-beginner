import React, { useEffect, useState } from "react"
import { UseContext } from "../context/context"
import PopUp from "./PopUp"

const MainGrid = ({ data }) => {

  const { loading, error, show, scroll, setShow, setDetails, } = UseContext()

  function getDetail(item) {
    setShow(true)
    setDetails(item)
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div >

      <div className="grid  grid-cols-4 bg-[#222831] max-md:grid-cols-2">
        {loading ? <div>loading...</div> : null}
        {error ? <div>Error {error}</div> : null}
        {data?.map((item) =>
          <div onClick={() => getDetail(item)} key={item.id} className=" m-3 border font-bold hover:border-[#00ADB5] animate  hover:shadow-[#95eaef83]  hover:shadow-lg bg-black text-white rounded-xl">
            <div className=" rounded-xl">
              <img className="object-cover object-center  rounded-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
              <div className="flex flex-col   h-[70px] justify-center">
                <div className="flex items-center place-content-between px-3">
                  <p>{item.title}</p>
                  <p>⭐{item.vote_average.toFixed(1)}</p>
                </div>
                <div className="px-3">{item.release_date}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MainGrid
