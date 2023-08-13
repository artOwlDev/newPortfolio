import { useEffect, useState } from 'react'
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
import Loader from './components/Loader'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({
        duration: 2500,
        once: true,
        easing: "ease"
    })
}, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },1300); 



    return () => clearTimeout(timer);
  },[])

  return (
    <div className="App">
      {isLoading ? (
        <Loader/>
      ) : (
        <>
            <div data-aos="fade-in">

              <Banner/>
              <About/>

              <div data-aos="fade-in">
                <Projects/>

              </div>



              <div data-aos="fade-in">
                <Technologies/>
              </div>

              <Contact/>
              <Footer/>

            </div>
        </>
      
      
      )}
    </div>
  )
}

export default App
