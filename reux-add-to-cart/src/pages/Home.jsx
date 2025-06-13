import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AiOutlineLoading } from "react-icons/ai";
import MainGrid from '../components/MainGrid';

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState()

  async function apicallHome() {
    try {
      setLoading(true)
      const responce = await fetch('https://fakestoreapi.com/products')
      if (!responce.ok) throw new Error(responce.statusText)
      console.log(responce)
      const jsondata = await responce.json()
      console.log(jsondata)
      setData(jsondata)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    apicallHome()
  }, [])

  if (loading) return <div className='border relative flex h-dvh justify-center items-center' ><img src="vite.svg" className='h-5' alt="" /><AiOutlineLoading size={100} className='absolute animate-spin ' /></div>
  if (error) return <div>Error:{error}</div>

  return (
    <MainGrid data={data}/>
  )
}

export default Home
