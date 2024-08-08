import React from 'react'
import './mediaquires.css'
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';


function Home(){
  
  return (
    <>
   <div className="page-margin">
    <section className="hero" id="hero">
      <div className="hero_container">

        <div className="hero_content">
              <h1>Keeping Your Family’s Smiles Healthy</h1>
              <p> Caring and comprehensive dental care for the entire family in Carngie.</p>
              <p> Book an appointment today.</p>
              <br/>

              <div className='btn-container'>

                <div className="btn">
                <a href="tel:+61395785552" ><span className="material-symbols-outlined">call</span> (03) 9578 5552</a> 
                </div>

                <a href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1" className="secondary-btn">
                <span className="material-symbols-outlined">event</span> Book Online</a> 
              </div>
        </div>        
      

  <div className="parent-container">
    <img className="fit-image" src="https://t4.ftcdn.net/jpg/00/01/27/75/240_F_1277521_jha6pDD6y68s6zrNtGmJKqrEl8NsPQ.jpg" alt="Family smiling"/>
  </div>

      

      </div>
    </section>


    <section id="service">
      <h2>Why choose us?</h2>

      
      <div className="service-wrapper">

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p> Our Practice has undergone an assessment process that ensures our practice meets a high standard of safety and quality.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>HDAA Accredited</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corrupti.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>
   
      </div>
      
    </section>
             
    <section id="providers-section">
      <div className="content center">
        <h2> Preferred providers</h2>
		    <p>Have any of the following health insurance? Get reduced and capped dental fees with us, here at North Road Dental Clinic.</p>
        <p>We are the preferred providers for HCF, NIB, CBHS & Smile.com.au.</p>
      </div>

            <div className="images-container">
              <div className="image-container">
                <img src="https://www.erinafair.com.au/contentassets/14ad31f422a044b08a308b4c114fe5ec/square-logos-6-1.png?width=300&height=400&upscale=false&mode=max&quality=80" alt="HCF" width="210px" />
              </div>
              <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCS_U6OYE7ty3-pExmJS0oIprq_iFS9Cg20HpK4Fw3DM5TBElXYaJeplpgJQv6J8-PnI&usqp=CAU" alt="NIB" width="200px"  />
              </div>
              <div className="image-container">
                <img src="https://membershealth.com.au/wp-content/uploads/2019/09/CBHS.svg" alt="CBHS" width="250px" />
              </div>
            </div>
          
          
          <div className="smile">
          <img src="https://yarravilledental.com.au/wp-content/uploads/2023/03/Smile-Logo.png"/>
          </div>
        </section>

        <section className="cdbs">
          <div className="cdbs-text">
            <h2>Child Dental Benefits Schedule (CDBS)</h2>
            <p>Child Dental Benefits Schedule (CDBS) covers part or the full cost of some general dental services for children if eligible.</p>

            <p>Eligible child must be all of the following:</p>
            <ul>
              <li>0 to 17 years old for at least one day that calendar year</li>
              <li>Eligible for Medicare</li>
              <li>Receive an eligible Australian government payment for at least once a year, or have a parent, career or guardian getting a payment for at least once a year.</li>
            </ul>
            
            <div className = "btn-container">

            <a href="#" className="btn">Learn more</a>

            <a href="https://www.servicesaustralia.gov.au/eligibility-checks-for-child-dental-benefits-schedule?context=22426" rel="noopener noreferrer" target="_blank" className="secondary-btn">Check eligibility</a>
            </div>
        </div>

          <div className="about-img">
          <img src="./assets/CDBS.png" alt="Child Dental Benefit Scheme for eligible children"/>
          </div>
        </section>
          
    
     
        </div>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Home
