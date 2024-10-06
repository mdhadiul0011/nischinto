import React from 'react'
import Container from '../Container'

function HeroPart() {
  return (
    <section id='hero_part'>
      <Container>
        <div className='hero_content'>
          <div className='hero_text'>
            <h2 className="top_text">Take best quality treatment for 
                <div  className="animate_text">
                <span className=' text-primarycolor text-[60px] font-bold '>Crutches</span> 
                <span className=' text-primarycolor text-[60px] font-bold '>Cardiology</span> 
                <span className=' text-primarycolor text-[60px] font-bold '>Dentist</span> 
                <span className=' text-primarycolor text-[60px] font-bold '>Neurology</span> 
                <span className=' text-primarycolor text-[60px] font-bold '>Crutches</span> 
              </div>
            </h2>
            <p className='hero_sub_title'>The art of medicine consists in amusing the patient while nature cures the disease.
            Treatment without prevention is simply unsustainable.</p>

            <button className="hero_btn">Appointment</button>
          </div>
          <div className="hero_doc_img"></div>
        </div>
      </Container>
    </section>
  )
}

export default HeroPart
