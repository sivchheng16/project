import { createRoot } from "react-dom/client";
import "./index.css";
// import Nav from './component/Nav.jsx'
// import Header from "./pages/Header.js";
// import About from "./pages/about/About.js";
// import Service from "./pages/service/Service.js";
// import Portfolio from "./pages/Portfolio.js";
// import Footer from "./pages/Footer.js";
// import Hero from "./pages/hero/Hero.js";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    {/* <Nav /> */}
    {/* <Header />
    <Hero />
    <About />
    <Service />
    <Portfolio />
    <Footer /> */}
    <App />
  </BrowserRouter>
);
