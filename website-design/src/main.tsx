import { createRoot } from 'react-dom/client'
import './index.css'
// import Nav from './component/Nav.jsx'
import Header from './component/Header.jsx'
import Hero from './component/Hero.js'
import About from './component/About.js'

createRoot(document.getElementById('root')!).render(
  <div>
    {/* <Nav /> */}
    <Header />
    <Hero />
    <About />
  </div>
)
