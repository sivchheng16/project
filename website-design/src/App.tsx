import { Route, Routes } from "react-router-dom";

// import Header from "./pages/Header.js";
// import About from "./pages/about/About.js";
// import Service from "./pages/service/Service.js";
// import Portfolio from "./pages/Portfolio.js";
// import Footer from "./pages/Footer.js";
// import Hero from "./pages/hero/Hero.js";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Footer />} />
    </Routes>
  );
}

export default App;
