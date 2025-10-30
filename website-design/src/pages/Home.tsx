import Header from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
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
    </div>
  );
}
