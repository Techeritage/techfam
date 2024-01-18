import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
