/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import ONama from './Components/O nama/ONama'
import Jelovnik from './Components/Jelovnik/Jelovnik'
import GalerijaMain from './Components/GalerijaMain/GalerijaMain'
import Title from './Components/Title/Title'
import Kontakt from './Components/Kontakt/Kontakt'
import Footer from './Components/Footer/Footer'
import GalerijaPage from './Components/GalerijaPage/GalerijaPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Jelovnik />
      <ONama />
      <GalerijaMain />
      <div className='container'>
        <Title subTitle='rezervišite vaše mesto' title='Kontakt' />
        <Kontakt />
      </div>
      <GalerijaPage />
      <Footer />
    </div >
  )
}

export default App;
