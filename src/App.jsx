import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Apply from './Components/Apply';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import React from 'react';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/termsOfService" element={<TermsOfService />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
