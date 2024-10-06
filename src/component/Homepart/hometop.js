import React from 'react'
import Container from '../Container'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function HomeTop() {
  return (
    <section id="home_top">
      <Container>
        <div className='top_nav'>
            <div className='nav_flex'>
                <div className='icon_flex'>
                    <div className='email_icon'>
                        <MdOutlineEmail className='top_icons'/>
                        <a href="#" className='email_text'>info@nischinto.com</a>
                    </div>
                    <div className='email_icon'>
                        <FaPhoneVolume className='top_icons'/>
                        <a href="#" className='email_text'>+01 - 234 567 890</a>
                    </div>
                </div>
                <div>
                    <a href='#' className='appointment_btn'>Appointment</a>
                </div>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeTop
