import Header from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Hero from "./Hero";
import Service from "./Service";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Footer />
    </div>
  );
}
