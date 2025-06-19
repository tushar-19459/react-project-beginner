import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { ProvideContext } from './context/context.jsx'
import Search from './pages/Search.jsx'

const App = () => {
  return (
    <ProvideContext>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/favorites' element={<Favorites></Favorites>}></Route>
        <Route path='/search/:text' element={<Search></Search>}></Route>
      </Routes>
    </ProvideContext>
  )
}

export default App
