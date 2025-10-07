import Header from "./Header";
import About from "./about/About";
import Hero from "./hero/Hero";
import Service from "./service/Service";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

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
