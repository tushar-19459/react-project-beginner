import React, { useEffect, useState } from 'react'
import { ConsumeContext } from '../../context'
import Loading from "../../components/Loading";
import ErrorMsg from "../../components/Error";

const Favorites = () => {

  const { fav, setFav, loading, setloading, error, setError ,favdata,setFavdata,handleremove} = ConsumeContext()


  async function apicall(params) {
    const responce = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params}`)
    if (!responce.ok) throw new Error(responce.message);
    const jsondata = await responce.json()
    setFavdata(pre =>
      [...pre, jsondata.data.recipe]
    )
  }

  console.log(favdata)

  // function handleremove(id) {
  //   const newData = favdata.filter((item) =>
  //     item.id !== id
  //   )
  //   setFavdata(newData)
  //   const newfav = fav.filter(favid => favid !== id)
  //   setFav(newfav)
  // }

  useEffect(() => {
    try {
      setloading(true)
      if (fav && fav.length) {
        for (let i = 0; i < fav.length; i++) {
          apicall(fav[i])
        }
      }
    } catch (error) {
      setError(error)
    }
    finally {
      setloading(false)
    }
  }, [])


  return (
    <div className='grid grid-cols-4 max-sm:grid-cols-2'>
      <Loading></Loading>
      <ErrorMsg></ErrorMsg>
      {error ? <h1 className=" w-dvw text-[60px] font-bold text-center">Error:{error}</h1> : null}
      {fav.length === 0 && <h1 className=" w-dvw text-[60px] font-bold text-center">No Favs</h1>}
      {favdata && favdata.length > 0 &&
        favdata.map((item) =>
          <div className='flex flex-col hover:shadow-2xl rounded-xl duration-300 border border-black shadow-black items-center justify-center   h-[300px] m-3 hover:h-[302px] ' key={item.id}>
            <div className='rounded-2xl overflow-hidden h-[160px] w-[250px]   '>
              <img className='cover ' src={item.image_url} alt="" />
            </div>
            <div className='flex flex-col   w-full self-start'>
              <p className='pl-5 m-1 text-blue-600'>{item.publisher}</p>
              <p className='pl-5 m-1'>{item.title}</p>
              <button onClick={() => handleremove(item.id)} className='self-center bg-black w-2/3 h-8 rounded-xl hover:shadow-2xl duration-300 shadow-black text-white hover:text-black hover:bg-white hover:border-black hover:border'>Remove</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Favorites
