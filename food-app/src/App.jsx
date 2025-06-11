import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'
import Favorites from './pages/favorites'
import NotFound from './pages/notpage'
const App = () => {
  return (
    <div>
      <div >
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
