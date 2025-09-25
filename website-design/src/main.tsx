import { createRoot } from "react-dom/client";
import "./index.css";
// import Nav from './component/Nav.jsx'
import Header from "./component/Header.jsx";
import About from "./component/about/About.js";
import Service from "./component/service/Service.js";
import Portfolio from "./component/Portfolio.js";
import Footer from "./component/Footer.js";
import Hero from "./component/hero/Hero.js";

createRoot(document.getElementById("root")!).render(
  <div className="">
    {/* <Nav /> */}
    <Header />
    <Hero />
    <About />
    <Service />
    <Portfolio />
    <Footer />
  </div>
);
