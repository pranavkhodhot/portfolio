import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="text-white">
              <ParticlesBackground />
              <NavBar />
              <Hero />
              <About />
              <Technologies />
              <Projects />
              <Experience></Experience>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
