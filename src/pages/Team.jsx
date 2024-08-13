import React from 'react'
import './Team.css'

function Team(){
  
  return (
    <>
<div className="wrapper">
      

  <div className="heading">
    <h1>Our Dentists</h1>
    <p>Our team at North Road Dental Clinic comprise of highly-trained, experienced and friendly dental professionals, committed to ensuring you receive the best appropriate dental care for your needs.</p>
  </div> 

  <div className="dentist-container">
    <div className="dentist-imgbox">
      <img src="./assets/rose.png" alt="Dr. Rose Gulnaz Cemiloglu" />
    </div>

    <div className="text">
      <h2> Dr. Rose Gulnaz Cemiloglu </h2> 
      <h3>Principal Dentist,  Female, Bachelor of Dental Surgery (BDS)</h3>
      <h3>Speaks English, and Turkish</h3>
    
      <p>Dr. Rose brings her extensive experience and skills gleaned over 29 years to North Road Dental Clinic. She is a member of ADA and ADAVB. She enjoys all aspects of general and family dentistry, including cosmetic dentistry. 
        She has a special interest in endodontics, prosthodontics, periodontology, and recently implantology. She will be privileged to help you or your loved ones on any aspect of their dental health.
        <br/><br/>
        She has previously worked at Royal Dental Hospital of Melbourne, Monashlink Community Health Centre of Clayton, Whitehorse Community Health Service of Box Hill. In the last two positions she has also worked as a clinical demonstrator for University of Melbourne, Dental school mentoring final year students. Further, she has worked at various private practices located at Forest Hill, Burwood, Chadstone and Moorabbin.
        <br/><br/>
        Outside of work, she is a busy mother of two and an avid cook specializing in Mediterranean cuisine.
      </p>
    </div>
  </div>

 

  <div className="dentist-container">
  <div className="dentist-imgbox">
      <img src="assets/fabiola.jpeg" alt="Dr. Fabiola Menegat" />
    </div>

    <div className="text">
      <h2> Dr. Fabiola Menegat </h2> 
      <h3>Dentist, Female, Bachelor of Dental Surgery (BDS)</h3>  
      <h3>Speaks English, and Portuguese</h3>
    
      <p>Dr. Fabiola graduated in 2003 with a Bachelor of Dental Science(Hons), and since then has worked as a dentist in public and private clinics, both in Australia and overseas. She is a gentle and caring dentist and enjoys working with adults and children. Dr. Fabiola is passionate to provide a positive experience to patients and has a strong focus in preventative dentistry to help patients maintain healthy teeth and gums long term. Outside of work, she likes meeting with friends, cooking and yoga.</p>
    </div>
  </div>


  <div className="dentist-container">
    <div className="dentist-imgbox">
      <img src="assets/Ali_4426.jpg" alt="Dr. Aliakbar Safidroodi" />
    </div>

    <div className="text">
      <h2>Dr. Aliakbar Safidroodi</h2> 
      <h3>Dentist, Male, Bachelor of Dental Surgery (BDS)</h3>  
      <h3>Speaks English</h3>
    
      <p>Dr Ali brings his extensive knowledge on dental science spanning 2 decades. He enjoys treating patients of all ages and needs, and has a special interest in oral surgery and implantology. Dr Ali is our clinic's visiting surgeon for our implant patients.</p>
    </div>
  </div>


</div>


    </>
  )
}

export default Team
