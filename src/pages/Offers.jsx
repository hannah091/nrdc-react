import React from 'react'
import './Offers.css'
import { Card } from "flowbite-react";


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

  <section className="offers">
      
{/*No Offers Avaliable
        <div className="no_offers">
          <p>Sorry, we have no avaliable offers running at the moment. But we encourage you to visit this page from time to time.</p>
        </div>
*/}


    
    <div className="card">
      <div className="img_box">
        <img src="https://www.thehouseofmouth.com.au/wp-content/uploads/2021/03/5Polashadeguide_thehouseofmouth.jpg" alt="Teeth Whitening" />
        </div>  
      <div className="card_content">
         <h4>$350 Take Home Whitening Kit</h4>

         <p>Achieve whiten teeth at the comfort of your home, with two easy appointments. Cost covers the whole procedure and kit.</p>
          
        <a href="/whitening_offer.html" className="card_btn"> Read more</a>
          <br/><br/><br/>
          <span>19th Nov - 29th Dec 2023</span>
      </div>
    </div>  

  

</section>

<Card
      className="max-w-sm"
      imgAlt="Teeth Whitening"
      imgSrc="https://www.thehouseofmouth.com.au/wp-content/uploads/2021/03/5Polashadeguide_thehouseofmouth.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

    <div className="grid grid-cols-2 gap-4">

    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  </div>
</div>
    </>
  )
}

export default Offers
