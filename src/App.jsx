import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import "./App.css"
import SplineTest from './components/SplineTest'
function App() {

  return (
    <>
      <div className='root bg-dark'>
        <NavBar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Projects/>
        <Experience/>
      </div>
    </>
  )
}

export default App
