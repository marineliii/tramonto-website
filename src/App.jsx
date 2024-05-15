/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import GalerijaPage from './Pages/GalerijaPage/GalerijaPage'
import NoPage from './Pages/NoPage/NoPage'
import Kontakt from './Components/Kontakt/Kontakt'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ONamaPage from './Pages/O nama page/ONamaPage'
import JelovnikPage from './Pages/JelovnikPage/JelovnikPage'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route exact path="/" element={<HomePage />} />
          <Route path='/galerija' element={<GalerijaPage />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/o-nama' element={<ONamaPage />} />
          <Route path='/jelovnik' element={<JelovnikPage />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App;
