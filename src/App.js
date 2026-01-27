import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'bg-gray-950 text-white' : 'bg-white text-black'}>
      <Navbar dark={dark} setDark={setDark} />

      <Home />
      <About />
      <Education />
      <Certifications/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
