import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="footer-box" id="quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><CustomLink to="/Team"> Our Team</CustomLink></li>
              <li><CustomLink to="/NewPatientForm">New Patient Form</CustomLink></li>
              <li><CustomLink to="/PatientFeedback">Patient Feedback</CustomLink></li>
              <li><CustomLink to="/ChildDentalBenefitScheme">Child Dental Benefit Scheme</CustomLink></li>
              <li><CustomLink to="/GettingHere">Getting Here</CustomLink></li>
              <li><CustomLink to="/Offers">Offers</CustomLink></li>
            </ul>
          </div>

          <div className="footer-box" id="services">
            <h2>Services</h2>
            <ul>
              <li><CustomLink to="/ScaleClean">Scale & Clean</CustomLink></li>
              <li><CustomLink to="/MouthguardSplint">Mouthguard & Splint</CustomLink></li>
              <li><CustomLink to="/TeethWhitening">Teeth Whitening</CustomLink></li>
              <li><CustomLink to="/Filling">Filling</CustomLink></li>
              <li><CustomLink to="/Extraction">Extraction</CustomLink></li>
              <li><CustomLink to="/RootCanal">Root Canal</CustomLink></li>
              <li><CustomLink to="/CrownVeneerDenture">Crown, Veneer, Denture</CustomLink></li>
              <li><CustomLink to="/Implant">Implant</CustomLink></li>
            </ul>
          </div>

          <div className="footer-box" id="opening-hours">
            <h2>Opening Hours</h2>
            <div className="inner-hrs-box">
  <div className="days" id="footer-font">
    <p>Monday</p>
    <p>Tuesday</p>
    <p>Wednesday</p>
    <p>Thursday</p>
    <p>Friday</p>
    <p>Saturday</p>
    <p>Sunday</p>
  </div>

  <div className="time" id="footer-font">
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

          <div className="footer-box">
            <h2>Contact Us</h2>
            <div className="contact-info-details" id="footer-font" >
            <span className="material-symbols-outlined">call</span><div>(03) 9578 5552</div>
            </div>

            <div className="contact-info-details" id="footer-font">
            <span className="material-symbols-outlined">print</span><div>(03) 9578 5520</div>
            </div>

            <div className="contact-info-details" id="footer-font">
            <span className="material-symbols-outlined">mail</span><div>info@northdental.com.au</div>
            </div>


            <div className="contact-info-details" id="footer-font">
            <span className="material-symbols-outlined">location_on</span>
            <a href="https://www.google.com/maps/place/North+Road+Dental+Clinic/@-37.9053465,145.0516743,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!2s687+North+Rd,+Carnegie+VIC+3163!2m2!1d145.0541897!2d-37.9053461!3m5!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!8m2!3d-37.9053508!4d145.0542546!16s%2Fg%2F11b6jhcc9w?entry=ttu" target="_blank" rel="noreferrer">
            <div>687 North Road, <br />Carnegie VIC 3163</div>
            </a>
            </div>

          </div>

          <div className="footer-box" id="map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12592.292952883494!2d145.0542546!3d-37.9053508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66bd6b7de0605%3A0x5b7587b8efa5d9e8!2sNorth%20Road%20Dental%20Clinic!5e0!3m2!1sen!2sau!4v1709376556364!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </footer>

      <div className="copyright_box">
     <span className="copyright">© 2024 North Road Dental Clinic. All Rights Reserved</span>
    
     <a href="https://www.facebook.com/NorthRdDentalClinic/" class="facebook"> 
     <span className="Social"><svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2104 25.3697V15.1827H7.89062V10.938H11.2104V7.54196C11.2104 4.03291 13.3815 2.30664 16.4408 2.30664C17.9062 2.30664 19.1665 2.4185 19.534 2.46808V6.13511H17.4114C15.7475 6.13511 15.3598 6.94578 15.3598 8.13237V10.938H19.508L18.6784 15.1816H15.3598L15.4263 25.3697" fill="white"/>
       </svg>
       </span>
     </a>
   </div>
    </>
  );
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

export default Footer;
