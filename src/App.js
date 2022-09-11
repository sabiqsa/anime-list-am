import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import DetailsAnime from './pages/detailsAnime/detailsAnime';

import './App.css';

function App() {
  return (
    <div className="Appp">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsAnime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
