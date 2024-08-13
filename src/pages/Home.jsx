import React from 'react'
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';


function Home(){
  
  return (
    <>
<div className="page-margin">
    
    <section className="hero" id="hero">
      <div className="hero_container">

        <div className="hero-content">
              <h1><b>Keeping Your Family’s Smiles Bright & Healthy</b></h1>
              <p> Caring and comprehensive dental care for the entire family in Carngie, Ormond, McKinnon, Bentleigh East and surrounding suburbs.</p>
              <p> Book an appointment today.</p>
              <br/>

              <div className='btn-container'>

                <div className="btn">
                <a href="tel:+61395785552" className="phone-button"><span className="material-symbols-outlined">call</span> (03) 9578 5552</a> 
                </div>

                <a href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1" className="secondary-btn">
                <span className="material-symbols-outlined">event</span> Book Online</a> 
              </div>
        </div>        
      

        <div className="heroimage-container">
          <img className="hero-image" src="https://t4.ftcdn.net/jpg/00/01/27/75/240_F_1277521_jha6pDD6y68s6zrNtGmJKqrEl8NsPQ.jpg" alt="Family smiling"/>
        </div>

      

      </div>
    </section>


    <section id="service">
      <h2 className='section-heading'><b>Why choose North Road Dental Clinic?</b></h2>

      
      <div className="service-container">

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4><n></n>ADA Accredited Practice</h4>
            <p>Practice has acheived and undergone an assessment process that ensures our practice meets a high standard of safety and quality.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>Highly Experienced Dentist</h4>
            <p>Our Dentists are fully qualified & have 12+ years of experience providing high-quality dental care for you and your family.
            </p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>Translator</h4>
            <p>Turkish & Portuguese translator avaliable. <br/> When booking your next appointment, please request Turkish or Portugese Dentist.</p>
            <Link to="/Team" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
            <div className='service-content'>
            <h4>Accepts government dental vouchers</h4>
            <p> Accepts VEDS, VGDS & VDS vouchers entitled to patients, funded by the Victorian government.</p>
            </div>
            <Link to="/VGDS" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
        
            <h4>Wheelchair Access</h4>
            <p>Practice meets Australian standards for wheelchair access.
            Door Openings 850mm minimum width for wheelchairs and handrail avalible at entryway.
            </p>
            <Link to="/Contact" className="card-link">Find out more</Link>
        </div>

        <div className="service-card">
            <span class="material-symbols-outlined">collections_bookmark</span>
          
            <h4>Close to Public Transport</h4>
            <p>Easy to access by public transport. <br/> 630 & 625 bus stops in front of practice. Close to Carnegie, Ormond and McKinnon train station. </p>
            <Link to="/Contact" className="card-link">Find out more</Link>
        </div>
   
      </div>
      
    </section>
             
    <section id="providers-section">

      <div className="provider-logos">
            <div className="images-container">

              <a href="https://www.hcf.com.au/health-agenda/health-care/research-and-insights/dental-insurance-cover" title="Go to HCF dental cover webpage" target="_blank">
              <div className="image-container">
                <img src="https://www.erinafair.com.au/contentassets/14ad31f422a044b08a308b4c114fe5ec/square-logos-6-1.png?width=300&height=400&upscale=false&mode=max&quality=80" alt="HCF" width="210px" />
              </div>
              </a>

              <a href="https://www.nib.com.au/health-information/extras/nib-dental-care-centres" title="Go to nib's dental extras webpage" target="_blank">
              <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCS_U6OYE7ty3-pExmJS0oIprq_iFS9Cg20HpK4Fw3DM5TBElXYaJeplpgJQv6J8-PnI&usqp=CAU" alt="NIB" width="200px"  />
              </div>
              </a>

              <a href="https://www.cbhs.com.au/health-insurance/extras-cover/top-extras" title="Go to CBHS' dental extras webpage" target="_blank">
              <div className="image-container">
                <img src="https://membershealth.com.au/wp-content/uploads/2019/09/CBHS.svg" alt="CBHS" width="250px" />
              </div>
              </a>

            </div>
          
            <div className="smile">
            <a href="https://www.smile.com.au/" title="Go to Smile.com.au's webpage" target="_blank"> <img src="https://yarravilledental.com.au/wp-content/uploads/2023/03/Smile-Logo.png"/></a>
            </div>
      </div>

      <div className="content">
        <h2 className='section-heading' id="provider-heading"><b>Preferred providers</b></h2>
		    <p>
        We are preferred providers for HCF, NIB, <a href="https://www.nib.com.au/providers/">NIB partnered health funds</a>, CBHS & Smile.com.au.<br/>
        Get reduced and capped dental fees with the following health providers and claim on their following offers:<br/><br/>
        <ul>
          <li><a href="https://www.hcf.com.au/health-agenda/health-care/research-and-insights/dental-insurance-cover " target="_blank" className="provider-link">HCF:</a> dental cover can claim one or two check-up and cleans per calendar year with no gap to pay. 
          </li>
          <li><a href="https://www.nib.com.au/health-information/extras/nib-dental-care-centres" target="_blank" className="provider-link">nib:</a> members with extras cover can access no gap check-up and cleans.
          </li>
          <li><a href="https://www.cbhs.com.au/health-insurance/extras-cover/top-extras" target="_blank" className="provider-link">CBHS:</a> Members with extras have a set benefit, cover limit on selected dental services.
          </li>
        <li><a href="https://www.smile.com.au/" target="_blank" className="provider-link">smile.com.au:</a> members can at recieve atleast 15% off every treatment. And benefit twice with select health funds.
        </li>
        </ul>

        <br/>
        Click on the logo to find out more.
        <br/><br/>
        * We also price match Bupa & Medibank, but we are not the preferred provider.
        </p>
      </div>

      
    </section>

        <section className="cdbs">
          <div className="cdbs-text">
            <h2 className='section-heading'><b>Child Dental Benefits Schedule (CDBS)</b></h2>
            <p>Child Dental Benefits Schedule (CDBS) covers part or the full cost of some general dental services for children if eligible.</p>

            <p>Eligible child must be all of the following:</p>
            <ul>
              <li>0 to 17 years old for at least one day that calendar year</li>
              <li>Eligible for Medicare</li>
              <li>Receive an eligible Australian government payment for at least once a year, or have a parent, career or guardian getting a payment for at least once a year.</li>
            </ul>
            
            <div className = "btn-container">

            <Link to="/Cdbs" className="btn">Learn more</Link>

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
  )
}

export default Home
