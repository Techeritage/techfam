import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import './App.css';

import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OneEventPage from './pages/OneEventPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='app'>
      {
        loading ?
        <div className='loader'>
          <HashLoader color={'#d52c3f'} loading={loading} size={100}/>
        </div>
          :
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/eventPage" element={<OneEventPage />} />
              <Route path="/termsOfService" element={<TermsOfService />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </Router>
      }
    </div>
  )
}

export default App
