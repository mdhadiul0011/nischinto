import React from 'react'

function HeroPart() {
  return (
    <section id='hero_part'>
        <div className="container">
          <div className='row'>
            <div className="col-lg-8 col-md-12">
              <div className="hc-hero-content">
                <div className="hc-hero-content-title">
                      <h2 className="title">Take best quality treatment for 
                      <span className=' text-primarycolor text-[60px] font-bold '>Crutches</span> 
                      <span className=' text-primarycolor text-[60px] font-bold '>Cardiology</span> 
                      <span className=' text-primarycolor text-[60px] font-bold '>Dentist</span> 
                      <span className=' text-primarycolor text-[60px] font-bold '>Neurology</span> 
                      <span className=' text-primarycolor text-[60px] font-bold '>Crutches</span> 
                  </h2>
                  <p className='hero_sub_title'>The art of medicine consists in amusing the patient while nature cures the disease.
                  Treatment without prevention is simply unsustainable.</p>
                  <button className="hc-hero-btn">Appointment</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hc-hero-thumb">

              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroPart
