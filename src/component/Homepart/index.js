import React from 'react'
import HomeTop from './hometop'
import Navbar from './navbar'
import HeroPart from './hero'
import './style.css'
import './responsive.css'

function HomePart() {
  return (
    <div>
      <HomeTop/>
      <Navbar/>
      <HeroPart/>
    </div>
  )
}

export default HomePart
