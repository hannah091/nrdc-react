import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './pages/Home'
import Team from './pages/Team'
import Clean from './pages/Clean'
import Mouthguard from './pages/Mouthguard'
import Whitening from './pages/Whitening'
import Filling from './pages/Filling'
import Extraction from './pages/Extraction'
import Crown from './pages/Crown'
import Implant from './pages/Implant'
import Newptform from './pages/Newptform'
import Accreditation from './pages/Accreditation'
import Infection from './pages/Infection'
import VGDS from './pages/VGDS'
import VA from './pages/VA'
import Cdbs from './pages/Cdbs'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Clean" element={<Clean />} />
          <Route path="/Mouthguard" element={<Mouthguard />} />
          <Route path="/Whitening" element={<Whitening />} />
          <Route path="/Filling" element={<Filling />} />
          <Route path="/Extraction" element={<Extraction/>} />
          <Route path="/Crown" element={<Crown />} />
          <Route path="/Implant" element={<Implant />} />
          <Route path="/Newptform" element={<Newptform />} />
          <Route path="/Accreditation" element={<Accreditation />} />
          <Route path="/Infection" element={<Infection />} />
          <Route path="/VGDS" element={<VGDS />} />
          <Route path="/VA" element={<VA />} />
          <Route path="/Cdbs" element={<Cdbs />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Contact" element={<Contact />} />
        
        </Routes>
  
      <Footer/>
    </>
  )
}

export default App
