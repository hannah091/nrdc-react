import React from 'react'
import './Articles.css'

function Cdbs(){
  
  return (
    <>
    <div className='wrapper'>
      
    <ul className="breadcrumb">
    <li> <a href="#">Resources</a> </li>
    <li> <a href="#">(CDBS)</a> </li>

</ul>

      <div className='header-image-container'>
        <div className="header-textbox">
          <h2 className="title">Children Dental Benefits Schedule (CDBS)</h2>
          <p>Find out what the Children Dental Benefits Schedule (CDBS) is, what it can help you pay for and how to claim your benefit.</p>
        </div>
      </div>
    

      <section className="article-section">
        <h3 className="article-heading">What is the CDBS?</h3>
        <p>The Child Dental Benefits Schedule is often called CDBS for short. The Australian Government introduced it to help children access dental care. The CDBS allows eligible children to access general dental treatment at both public and private dental clinics. At most dental clinics, this treatment will be bulk-billed. </p>
      </section>

      <section cclassName="article-section">
        <h3 className="article-heading">Who can use the CDBS?</h3>
        <p>You will automatically get a letter to let you know if your child is eligible for the CDBS. You can also see if they are eligible in your myGov account. myGov is the government services website that lets you see your Medicare information online.</p>

        <p>Children are eligible if:</p>
        <ul>
          <li>they are under 18 years of age</li>
          <li>they are eligible for Medicare</li>
        </ul>
      </section>

      <section className="article-section">
        <h3 className="article-heading">How much money can you access?</h3>
        <p>$1,095 worth of dental services is available over 2 calendar years. Once all the money is used, you will need to wait for the new 2 year cover period to start to access more.</p>
        
        <p>Dental services covered by the CDBS include:</p>
        <ul>
          <li>examinations</li>
          <li>x-rays</li>
          <li>teeth cleaning</li>
          <li>fissure sealants</li>
          <li>fillings</li>
          <li>tooth removal</li>
          <li>root canal treatment.</li>
        </ul>
        <br/>
        <p>The CDBS does not cover orthodontic treatment, cosmetic dental work or dental services in a hospital.
        Your dentist will let you know what treatments can be paid for by the CDBS.</p>
        <p>To know how much money your child or children can access under the CDBS, contact Medicare, or check your myGov account. The team at North Road Dental Clinic may also be able to help you find this information.</p>
        <p>Many dental practices will bulk-bill the treatment. This means that you will not have to pay any money out of your own pocket.</p>
      </section>

      <section className="article-section">
        <h3 className="article-heading">Find out more</h3>
        <p>To find out more about the CDBS and if your child is eligible:</p>
        <ul>
          <li>Call Medicare on 132 011</li>
          <li>Visit the <a href='https://www.servicesaustralia.gov.au/'> Department of Human Services</a> website.</li>
        </ul>
      </section>

      <section>
        <div className='ada-container'>
        <img className='ada-logo' src='https://img.imageboss.me/ada-live/width/98/getmedia/e2370f06-cfbf-4020-aa2e-a5557b77277d/ADA_Image_logo_blue_symbol.png'></img>
        <a href='https://www.teeth.org.au/child-dental-benefits-schedule' target="_blank"><i>Written by the Australian Dental Association</i></a>
        </div>
      </section>
      
      </div>
    </>
  )
}

export default Cdbs