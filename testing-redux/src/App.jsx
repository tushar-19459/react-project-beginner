import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Details from './pages/Details'

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/cart" element={<Cart></Cart>}/>
      <Route path="/search" element={<Search></Search>}/>
      <Route path="/details/:id" element={<Details></Details>}/>
      <Route path="*" element={<NotFound></NotFound>}/>
    </Routes>
  )
}

export default App
