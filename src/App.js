import './App.css';
import Nav from './Nav';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import { Home,About,Contact,Blog } from './F1';
import LandingPage from './landingPage';
function App() {
  return (
    <div>
      <HashRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
