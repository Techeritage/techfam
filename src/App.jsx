import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Donate from './Components/Donate';
import Apply from './Components/Apply';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className='app'>
      {
        loading ?
        <HashLoader color={'#d52c3f'} loading={loading} size={50}/>
          :
        <Router>
          <div>
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
          </div>
        </Router>
      }
    </div>
  )
}

export default App
