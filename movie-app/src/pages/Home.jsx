import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import MainGrid from '../components/MainGrid'
import Footer from '../components/Footer'
import { UseContext } from '../context/context'
import PopUp from '../components/PopUp'
const Home = () => {


  const { page, apicall, data,show } = UseContext()

  useEffect(() => {
    apicall(page)
  }, [page])

  return (
    <div className='relative overflow-x-hidden bg-[#222831] h-dvh w-dvw bg'>
      {show && <div className="absolute z-50 w-dvh h-dvh  overflow-hidden "><PopUp></PopUp></div>}
      <NavBar></NavBar>
      {data ? <MainGrid data={data}></MainGrid> : null}
      <Footer></Footer>
    </div>
  )
}

export default Home
