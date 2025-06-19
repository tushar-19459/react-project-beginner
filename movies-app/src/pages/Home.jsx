import React from 'react'
import NavBar from '../components/NavBar'
import Popular from '../components/Popular'
import Upcoming from '../components/Upcoming'
import MainGrid from '../components/MainGrid'
const Home = () => {
  return (
    <div className='h-dvh w-dvw'>
      <NavBar></NavBar>
      <Popular></Popular>
      <Upcoming></Upcoming>
      <MainGrid></MainGrid>
    </div>
  )
}

export default Home
