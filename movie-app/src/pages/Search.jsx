import React, { useEffect, useState } from 'react'
import MainGrid from '../components/MainGrid'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { UseContext } from '../context/context'
import { LuSearchX } from "react-icons/lu";

const Search = () => {
  const { res, loading, setLoading, setError, filterdata, setFilterData, searchFor } = UseContext()
  const textParameter = useParams()

  console.log(textParameter)
  return (
    <div className='overflow-x-hidden bg-[#222831] h-dvh w-dvw'>
      <NavBar></NavBar>
      {!loading && filterdata.length === 0 &&
        <div className='test1 h-1/2 flex text-red-600 justify-center uppercase font-bold items-center '>
          <LuSearchX size={50} /><p className='text-4xl  '>can't find "{textParameter.text}" </p>
        </div>}
      {!loading && filterdata.length !== 0 && <div className='text-center text-white text-2xl font-bold'>Search results "{textParameter.text}" </div>}
      {filterdata ? <MainGrid data={filterdata}></MainGrid> : null}
    </div>
  )
}

export default Search
