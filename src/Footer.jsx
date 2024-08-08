import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="footer-box">
            <h2>Quick Links</h2>
            <ul>
              <li><CustomLink to="/Team">Team</CustomLink></li>
              <li><CustomLink to="/NewPatientForm">New Patient Form</CustomLink></li>
              <li><CustomLink to="/PatientFeedback">Patient Feedback</CustomLink></li>
              <li><CustomLink to="/ChildDentalBenefitScheme">Child Dental Benefit Scheme</CustomLink></li>
              <li><CustomLink to="/GettingHere">Getting Here</CustomLink></li>
              <li><CustomLink to="/Offers">Offers</CustomLink></li>
            </ul>
          </div>

          <div className="footer-box">
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

          <div className="footer-box">
            <h2>Opening Hours</h2>
            <ul>
              <p>Mon 9am - 6pm</p>
              <li>Tue 9am - 5pm</li>
              <li>Wed 9am - 6pm</li>
              <li>Thu 9am - 5pm</li>
              <li>Fri 9am - 6pm</li>
              <li>Saturday - By Appointments Only</li>
              <li>Sunday - Closed</li>
            </ul>
          </div>

          <div className="footer-box">
            <h2>Contact Us</h2>
            <ul className="contact">
              <li> <span className="material-symbols-outlined">call</span>(03) 9578 5552</li>
              <li> <span className="material-symbols-outlined">print</span>(03) 9578 5520</li>
              <li> <span className="material-symbols-outlined">mail</span>info@northdental.com.au</li>
              <li> <span className="material-symbols-outlined">location_on</span>687 North Road, <br />Carnegie VIC 3163</li>
            </ul>
          </div>

          <div className="footer-box">
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
