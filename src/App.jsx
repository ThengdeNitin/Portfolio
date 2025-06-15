import './App.css'
import Footer from './components/footer';
import Herosection from './components/homepage/hero-section';
import Navbar from './components/navbar';
import AboutSection from './components/homepage/about';
import Experience from './components/homepage/experience';
import Skills from './components/homepage/skills';

function App() {

  return (
    <>
      <Navbar/>
      <Herosection/>
      <AboutSection />
      <Experience />
      <Skills />
      {/* <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
      <Footer/>
    </>
  )
}

export default App;
