// import Header from "./pages/Header.js";
// import About from "./pages/about/About.js";
// import Service from "./pages/service/Service.js";
// import Portfolio from "./pages/Portfolio.js";
// import Footer from "./pages/Footer.js";
// import Hero from "./pages/hero/Hero.js";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import RouteComponent from "./route-component/Route";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
