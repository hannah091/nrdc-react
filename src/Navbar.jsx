import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  function showSidebar() {
    setMobileDrawerOpen(true);
    console.log("open sidebar menu");
  }

  function closeSidebar() {
    setMobileDrawerOpen(false);
  }

  // Reset mobileDrawerOpen when the pathname changes
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="header_contact">
          <ul>
            <li>
              <div className="phone">
                <a href="tel:61-3-9578-5552">
                  <span className="material-symbols-outlined">call</span>(03) 9578 5552
                </a>
              </div>
            </li>
            <li>
              <div className="location">
                <a
                  href="https://www.google.com/maps/place/North+Road+Dental+Clinic/@-37.9053465,145.0516743,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!2s687+North+Rd,+Carnegie+VIC+3163!2m2!1d145.0541897!2d-37.9053461!3m5!1s0x6ad66bd6b7de0605:0x5b7587b8efa5d9e8!8m2!3d-37.9053508!4d145.0542546!16s%2Fg%2F11b6jhcc9w?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">location_on</span>687 North Road, Carnegie VIC 3165
                </a>
              </div>
            </li>
          </ul>
        </div>

        <nav id="desktop-nav">
          <Link to="/">
            <img
              id="navbar_logo"
              src="https://healthengine.com.au/photos/groups/grploc89215-logo-20220901110944.jpg"
              alt="North Road Dental Clinic logo"
            />
          </Link>

          <ul className="nav-links">
            <li className='active'>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/Team">Our Team</CustomLink>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Services<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <CustomLink to="/Clean">Scale & Clean</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Mouthguard">Mouthguard & Splint</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Whitening">Teeth Whitening</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Filling">Filling</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Extraction">Extraction</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Root Canal">Root Canal</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Crown">Crown, Veneer & Denture</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Mouthguard">Mouthguard & Splint</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Implant">Implant</CustomLink>
                  </li>
                </div>
              </div>
            </li>

            <li className="navbar_item">
              <div className="dropdown">
                <button className="dropbtn">Resources<span class="material-symbols-outlined">
stat_minus_1
</span></button>
                <div className="dropdown-content">
                  <li>
                    <CustomLink to="/New-pt-form">New Patient Form</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Accreditation">Prevention Infection Control</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Infection-control">Prevention Infection Control</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/Cdbs">Children Dental Benefit Scheme</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/VGDS">VGDS/VEDS</CustomLink>
                  </li>
                  <li>
                    <CustomLink to="/ VA">Veterans' Affair Dental</CustomLink>
                  </li>
                </div>
              </div>
            </li>

            <li>
              <CustomLink to="/Offers">Offers</CustomLink>
            </li>
            <li>
              <CustomLink to="/Contact">Contact Us</CustomLink>
            </li>

            <li>
              <a
                href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1"
                className="secondary-btn"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </nav>

        {/*mobile nav*/}
        <nav id="hamburger-nav">
          <Link to="/Home">
            <img
              id="navbar_logo"
              src="https://healthengine.com.au/photos/groups/grploc89215-logo-20220901110944.jpg"
              alt="North Road Dental Clinic logo"
            />
          </Link>

          {mobileDrawerOpen && (
            <ul className="sidebar">
              <li className="close-box">
                <button onClick={closeSidebar} className="close-btn">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </li>

              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/Team">Team</CustomLink>
              </li>
              <li>
                <CustomLink to="/Services">Services</CustomLink>
              </li>

              <li className="navbar_item">
                <div className="dropdown">
                  <button className="dropbtn">Resources</button>
                  <div className="dropdown-content">
                    <li>
                      <CustomLink to="/new-pt-form">New Patient Form</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/Cdbs">Children Dental Benefit Scheme</CustomLink>
                    </li>
                  </div>
                </div>
              </li>

              <li>
                <CustomLink to="/Offers">Offers</CustomLink>
              </li>
              <li>
                <CustomLink to="/Contact">Contact Us</CustomLink>
              </li>
            </ul>
          )}

          <div className="mobilebtn-container">
            <a href="tel:61-3-9578-5552" className="mobile-btn">
              <span className="material-symbols-outlined">call</span>Call
            </a>

            <a
              href="https://apac.dentalhub.online/v1/view/organization/869/index.html#/perspectives/1"
              className="mobile-btn"
            >
              <span className="material-symbols-outlined">event</span>
              Book Appt
            </a>

            <button onClick={showSidebar} className="mobile-menu-btn">
              <a className="mobile-btn">
                {' '}
                <span className="material-symbols-outlined">menu</span> Menu
              </a>
            </button>
          </div>
        </nav>
      </header>
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

export default Navbar;
