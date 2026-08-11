import './App.css'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="bg-white font-sans text-neutral-900">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
