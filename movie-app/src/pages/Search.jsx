import React, { useEffect, useState } from 'react'
import MainGrid from '../components/MainGrid'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { UseContext } from '../context/context'

const Search = () => {
  const { res, setLoading, setError ,filterdata,setFilterData,searchFor} = UseContext()
  const textParameter = useParams()
  console.log(textParameter)
  return (
    <div className='overflow-x-hidden bg-[#222831] h-dvh test1 w-dvw'>
      <NavBar></NavBar>
      <div className='text-center text-white text-2xl font-bold'>Search results : {textParameter.text} </div>
      {filterdata?<MainGrid data={filterdata}></MainGrid>:null}
    </div>
  )
}

export default Search
