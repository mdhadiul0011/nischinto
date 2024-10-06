'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function Navbar() {
  const [textcolor, setTextColor] = useState()
  const [subtextcolor, setSubTextColor] = useState()

  const handleClick = (e) => {
    setTextColor(e.target.id)
  }

  const handleSubNav = (e) => {
    setSubTextColor(e.target.id)
  }

  return (
    <section id='nav_part'>
      <Container>
        <div className='navigation'>
          <div className='nav_logo'>
            <Image src='/nav_logo.png' width={100} height={100} alt='nav_logo' priority={true} className='nav_logo'/>
          </div>
          <div className='nav_list'>
              <ul className='nav_stev'>
                <li><a href="#" id='1' key={1} onClick={handleClick} className={textcolor ==="1" ? "active_nav" : "nav_item" }>home</a></li>
                <li><a href="#" id='2' key={2} onClick={handleClick} className={textcolor ==="2" ? "active_nav" : "nav_item" }>about</a></li>
                <li><a href="#" id='3' key={3} onClick={handleClick} className={textcolor ==="3" ? "active_nav" : "nav_item" }>department</a></li>
                <li><a href="#" id='4' key={4} onClick={handleClick} className={textcolor ==="4" ? "active_nav" : "nav_item" }>doctors</a></li>
                <li><a href="#" id='5' key={5} onClick={handleClick} className={textcolor ==="5" ? "active_nav" : "nav_item" }>gallary</a></li>
                <li><a href="#" id='6' key={6} onClick={handleClick} className={textcolor ==="6" ? "active_nav" : "nav_item" }>pricing</a></li>
                <li className='nav_children'><a href="#" id='7' key={7} onClick={handleClick} className={textcolor ==="7" ? "active_nav" : "nav_item" }>blog</a>
                  <div className='sub_nav'>
                    <ul className='sub_nav_stev'>
                      <li><a href="#" id='10' key={10} onClick={handleSubNav} className={subtextcolor ==="10" ? "active_sub_nav" : "sub_nav_item" }>blogright sidebar</a></li>
                      <li><a href="#" id='20' key={20} onClick={handleSubNav} className={subtextcolor ==="20" ? "active_sub_nav" : "sub_nav_item" }>blogleft sidebar</a></li>
                      <li><a href="#" id='30' key={30} onClick={handleSubNav} className={subtextcolor ==="30" ? "active_sub_nav" : "sub_nav_item" }>blog no sidebar</a></li>
                      <li><a href="#" id='40' key={40} onClick={handleSubNav} className={subtextcolor ==="40" ? "active_sub_nav" : "sub_nav_item" }>blog details right sidebar</a></li>
                      <li><a href="#" id='50' key={50} onClick={handleSubNav} className={subtextcolor ==="50" ? "active_sub_nav" : "sub_nav_item" }>blog details left sidebar</a></li>
                      <li><a href="#" id='60' key={60} onClick={handleSubNav} className={subtextcolor ==="60" ? "active_sub_nav" : "sub_nav_item" }>blog details no sidebar</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#" id='8' key={8} onClick={handleClick} className={textcolor ==="8" ? "active_nav" : "nav_item" }>contact</a></li>
              </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default Navbar
