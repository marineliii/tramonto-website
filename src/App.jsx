/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import GalerijaPage from './Pages/GalerijaPage/GalerijaPage'
import NoPage from './Pages/NoPage/NoPage'
import Kontakt from './Components/Kontakt/Kontakt'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path='/galerija' element={<GalerijaPage />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App;
