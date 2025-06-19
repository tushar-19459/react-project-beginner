import React, { useEffect, useState } from 'react'
import MainGrid from '../components/MainGrid'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { UseContext } from '../context/context'

const Search = () => {
  const text = useParams()+''
  const { res, setLoading, setError ,filterdata,setFilterData,searchFor} = UseContext()

  return (
    <div className='overflow-x-hidden bg-[#222831] h-dvh test1 w-dvw'>
      <NavBar></NavBar>
      {filterdata?<MainGrid data={filterdata}></MainGrid>:null}
    </div>
  )
}

export default Search
