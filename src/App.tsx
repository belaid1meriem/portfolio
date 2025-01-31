import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className="bg-neutral-white text-neutral-900 bg-neutral-50 flex flex-col gap-16 font-poppins !scroll-smooth ">
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App

