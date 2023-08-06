import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Banner from './components/Banner'
import ButtonToTop from './components/ButtonTopTop'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import Contact from './components/Contact'


function App() {

  return (
    <div className="App">
      <Banner/>
      <ButtonToTop/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
