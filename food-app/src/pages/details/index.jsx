import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ConsumeContext } from '../../context'
import Loading from '../../components/Loading'

const Details = () => {
  const data = useParams()
  const { setloading, setError, addfav, fav, detailApicall, itemdetal } = ConsumeContext()

  useEffect(() => {
    try {
      setloading(true)
      detailApicall(data.id)
    } catch (error) {
      setError(error)
    } finally {
      setloading(false)
    }
  }, [])

  return (
    <>
      <Loading></Loading>
      {itemdetal &&
        <div className='w-full flex flex-col overflow-x-hidden  '>
          <div className=' self-center overflow-hidden  flex justify-center items-center w-2/3 h-2/4 '>
            <img src={itemdetal.image_url} className=" rounded-xl cover" alt="error" />
          </div>
          <div className='flex w-full'>
            <div className='  w-2/3'>
              <h1 className='text-[25px] text-center'>{itemdetal.title}</h1>
              <h1 className='text-[18px] text-center text-blue-500'>{itemdetal.publisher}</h1>
            </div>
            <div className=' flex justify-center items-center  w-[207px]'>
              <button className=' bg-black w-[250px] h-8 rounded-xl hover:shadow-2xl duration-300 shadow-black text-white hover:text-black hover:bg-white hover:border-black hover:border' onClick={() => addfav(itemdetal.id)} >Add to Favorites{fav.includes(data.id) ? "❤️" : null}</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='border border-black mb-5'>
              <div className='grid grid-cols-2'>
                <div className='text-center border border-black flex items-center justify-center font-bold h-[50px]'>INGREDIENTS</div><div className='text-center font-bold border-black flex items-center justify-center border ' >QUANTITY</div>
              </div>
              {
                itemdetal.ingredients.map((item, index) => (
                  <div key={index} className='grid grid-cols-2'>
                    <div key={index} className='border flex items-center justify-center  h-[50px] text-center' >{item.description} </div><div className='border  text-center flex items-center justify-center'> {item.quantity} {item.unit}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Details 