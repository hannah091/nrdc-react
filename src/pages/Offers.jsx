import React from 'react'
import './Offers.css'


function Offers(){
  
  return (
    <>
<div className="page-margin">
   <div className="heading-noimg">
          <h1 className='text-5xl font-bold mb-8'>Offers</h1>
          <p>
            Enjoy all the latest offers available at North Road Dental Clinic right now.
          </p>
  </div>

  <section className="offers-section">
      
{/*No Offers Avaliable
        <div className="no_offers">
          <p>Sorry, we have no avaliable offers running at the moment. But we encourage you to visit this page from time to time.</p>
        </div>
*/}


    
    <div className="card">
      <div className="img_box">
        <img src="https://t4.ftcdn.net/jpg/02/80/63/95/240_F_280639516_kYZCEs3PzKteFuZ0tCfOLKZqm9g9OyVz.jpg" alt="Teeth Cleaning image" />
        </div>  
      <div className="card-content">
         <h4>No Gap Check-Up & Clean (or) $200</h4>

         <p>No gap check-up and clean for patient insured with health insurance or $200 for patinets with no health insurance. Limited time only.</p>

         <a href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1" className="secondary-btn">
         <span className="material-symbols-outlined">event</span> Book now</a> 
        
          <br/>
          <span className="valid-date">19th Nov - 29th Dec 2023</span>
      </div>
    </div>  

    <div className="card">
      <div className="img_box">
        <img src="https://www.thehouseofmouth.com.au/wp-content/uploads/2021/03/5Polashadeguide_thehouseofmouth.jpg" alt="Teeth Whitening image" />
        </div>  
      <div className="card-content">
         <h4>$350 Take Home Whitening Kit</h4>

         <p>Achieve whiten teeth at the comfort of your home, with two easy appointments. Cost covers the whole procedure and kit.</p>

         <a href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1" className="secondary-btn">
         <span className="material-symbols-outlined">event</span> Book now</a> 
        
          <br/>
          <span className="valid-date">1st Jul - 31st Jul 2024</span>
      </div>
    </div>  
  

</section>

</div>
    </>
  )
}

export default Offers
