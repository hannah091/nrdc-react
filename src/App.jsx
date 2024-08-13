import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './pages/Home'
import Team from './pages/Team'
import Services from './pages/Services'
import Cdbs from './pages/Cdbs'
import Offers from './pages/Offers'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Cdbs" element={<Cdbs />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
