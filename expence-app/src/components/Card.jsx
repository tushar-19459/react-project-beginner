import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { ExpenceConsimer } from '../context/context';

const Card = () => {
  const { setShow, totalIncome, setTotalIncome, data, setData } = ExpenceConsimer()


  function handleAdd(event) {
    event.preventDefault()
    const form = event.target
    const discription = form.elements.discription.value
    const amount = parseInt(form.elements.amount.value)
    const type = form.elements.type.value
    setData(prev => [...prev, { discription, amount, type }]);
    setShow(false)
  }


  return (
    <div className='justify-center w-dvw h-dvh items-center flex absolute'>

      <div className='border  rounded-xl z-20 bg-white  shadow-xl w-1/4  p-3'>
        <div className=' flex place-content-between'>
          <p className='text-xl font-bold'>Add New Transaction </p><IoIosClose onClick={() => setShow(false)} className='hover:text-red-500' size={30} />
        </div>
        <form action="" onSubmit={(e) => handleAdd(e)} className='flex p-2 flex-col '>
          <span className="p-1">Enter Discription</span>
          <input required type="text" name='discription' className='border p-1 border-blue-300 rounded' />
          <span className="p-1" >Enter Amount</span>
          <input required type="number" name='amount' className='border border-blue-300 rounded' />
          <div className='self-start place-content-between  m-1 space-x-5 w-1/2'>
            <label ><input required type="radio" name="type" id="" value="income" />income</label>
            <label ><input required type="radio" name="type" id="" value="expence" />Expense</label>
          </div>
          <div className=' self-end flex  w-2/4 place-content-around'>
            <button className='border bg-gray-300 p-1 rounded w-1/3 ' onClick={() => setShow(false)} >Cancel</button>
            <button className='border bg-gray-300 p-1 rounded w-1/3' type='submit'>Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Card
