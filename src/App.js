import "./App.css";
// import F1 from "./F1";
import Nav from "./Nav.js";
import LandingPage from "./landingpage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Blog } from "./F1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
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
