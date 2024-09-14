import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ParticlesBackground from './components/ParticlesBackground'
import "./App.css"
function App() {

  return (
    <>
      <div className='root text-light'>
        <ParticlesBackground />
        <NavBar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
        <Experience></Experience>
      </div>
    </>
  )
}

export default App
