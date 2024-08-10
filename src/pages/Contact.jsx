import React from 'react'
import { Carousel } from "flowbite-react";

function Contact(){
  
  return (
    <>
    <div className="page-margin">
      <section class="contact">
        <div className="heading">
          <h1 className='text-5xl font-bold mb-8'>Contact Us</h1>
        

        </div>

        <div className="contact-container" >

          <div className="contact-info">
            <h4 className="text-2xl font-bold">Contact info</h4>

            <div className="contact-info-details">
            <span className="material-symbols-outlined">call</span><div>(03) 9578 5552</div>
            </div>

            <div className="contact-info-details">
            <span className="material-symbols-outlined">print</span><div>(03) 9578 5520</div>
            </div>

            <div className="contact-info-details">
            <span className="material-symbols-outlined">mail</span><div>info@northdental.com.au</div>
            </div>


            <div className="contact-info-details">
            <span className="material-symbols-outlined">location_on</span>
            <a href="https://www.google.com/maps/place/North+Road+Dental+Clinic/@-37.9053465,145.0516743,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!2s687+North+Rd,+Carnegie+VIC+3163!2m2!1d145.0541897!2d-37.9053461!3m5!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!8m2!3d-37.9053508!4d145.0542546!16s%2Fg%2F11b6jhcc9w?entry=ttu" target="_blank" rel="noreferrer">
            <div>687 North Road, <br />Carnegie VIC 3163</div>
            </a>
            </div>

            <div className="secondary-btn" id="acc">
               Accessibility
            </div>
          </div>


          <div className="contact-info" id='opening-hrs-box' >
            <h4 className="text-2xl font-bold">Opening Hours</h4>
<div className="inner-hrs-box">
  <div className="days">
    <p>Monday</p>
    <p>Tuesday</p>
    <p>Wednesday</p>
    <p>Thursday</p>
    <p>Friday</p>
    <p>Saturday</p>
    <p>Sunday</p>
  </div>

  <div className="time">
    <p>9am - 6pm</p>
    <p>9am - 5pm</p>
    <p>9am - 6pm</p>
    <p>9am - 5pm</p>
    <p>9am - 6pm</p>
    <p>By Appointment Only</p>
    <p>Closed</p>
  </div>
</div>

          </div>


       
        </div>
      </section>

    
    <div className="h-96 sm:h-96 xl:h-96 2xl:h-70v mb-16">
      <Carousel  slide={false}>
        <img src="https://healthengine.imgix.net/photos/grp_loc/grploc89215-gallery-20220901111721.jpg?ixlib=react-9.0.2&auto=format&w=4088" alt="North Road Dental Clinic Building" />

        <img src="https://lh3.googleusercontent.com/p/AF1QipMKG3qx2iNOqagv_56-R42gHgpc38CFSvj7lygv=s1360-w1360-h1020" alt="Street View" />

        <img src="https://lh3.googleusercontent.com/p/AF1QipNy-v3AG5yTWumPIHY28sENXdEnn5G9IhSV3Fnm=s1360-w1360-h1020" alt="Surgery Room" />

        <img src="https://lh3.googleusercontent.com/p/AF1QipOcduR49WryGA3u1coUGa4BNJnjlwwtoKK_NPYj=s1360-w1360-h1020" alt="Car Park" />

        <img src="https://lh3.googleusercontent.com/p/AF1QipPJEutHqCIbhgrHUKbgqXzwuGhYr4-J6nbQVwkY=s1360-w1360-h1020" alt="Enterance" />

        <img src="https://lh3.googleusercontent.com/p/AF1QipNhf6JxnD9o3U6baXsqSq2zQhDI8yIgXX2yXboX=s1360-w1360-h1020" alt="Reception" />

      
        <img src="https://lh3.googleusercontent.com/p/AF1QipMoNZA0JAnDgqnKbOxyk1PYP6H8TVe5tLbBD3Oq=s1360-w1360-h1020" alt="Waiting Room" />

       
       
      </Carousel>
    </div>
  

    </div>
    </>
  )
}

export default Contact
