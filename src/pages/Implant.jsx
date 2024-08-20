import React from 'react'
import './Articles.css'


function Implant(){
  
  return (
    <>
      <section className="w-full py-8 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="pr-8 md:pr-6">
          <h2 className='section-heading'><b>Child Dental Benefits Schedule (CDBS)</b></h2>
          <p>Child Dental Benefits Schedule (CDBS) covers part or the full cost of some general dental services for children if eligible.</p>

          <p>Eligible child must be all of the following:</p>
          <ul
          className='pb-8'>
            <li>0 to 17 years old for at least one day that calendar year</li>
            <li>Eligible for Medicare</li>
            <li>Receive an eligible Australian government payment for at least once a year, or have a parent, career or guardian getting a payment for at least once a year.</li>
          </ul>

            <a href="https://www.servicesaustralia.gov.au/eligibility-checks-for-child-dental-benefits-schedule?context=22426" rel="noopener noreferrer" target="_blank" className="secondary-btn">Check eligibility</a>
            
        </div>

          <div className="pt-8">
          <img src="./assets/CDBS.png" alt="Child Dental Benefit Scheme for eligible children"/>
          </div>
      </section>
      
    </>
  )
}

export default Implant
