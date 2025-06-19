import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Liked from './pages/Liked'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='bg-[#222831] h-dvh overflow-y-scroll no-vertical-scrollbar w-dvw overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/liked" element={<Liked/>} />
      </Routes>
    </div>
  )
}

export default App
