

import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import image from "../img/background.jpg"
import image2 from "../img/background2.avif"
import image3 from "../img/background3.jpg"
import portrait from "../img/portrait2.jpeg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import {FiUser} from "react-icons/fi"
import {SiElectron} from "react-icons/si"
import {GrProjects} from "react-icons/gr"
import {ImBook} from "react-icons/im"
import {AiOutlineMail} from "react-icons/ai"

const Banner = () => {

    const scrollUp = (vh) => {
        window.scrollTo({
            top: vh,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        Aos.init({
            duration: 2500,
            once: true,
            easing: "ease"
        })
    }, [])

  return (
    <div className='banner'>
        <img className='banner-image' src={image}/>

        <div className="banner-text">
            <h1>Artun Selçuk</h1>
            <div className="banner-line"></div>
            <div className="banner-text-p">
            <TypewriterComponent
                options={{
                    strings: ['Software Engineer', 'Computer Science @DalhousieU', 'T3 Stack Enthusiast', 'Coffee Enjoyer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    pauseFor: 900
            }}/>
            </div>
        </div>

        <div className="banner-my-image" data-aos="fade-in">
            <img src={portrait} alt="" />
        </div>

        <div className="links">
            <div className="links-span1">
                <span onClick={() => scrollUp(20)}> <FiUser className='icon' style={{margin: "0 2px"}}/> About</span>
                <span onClick={() => scrollUp(1050)}> <SiElectron className='icon' style={{margin: "0 2px"}}/> Technologies</span>
            </div>
            <div className="links-span2">
                <span onClick={() => scrollUp(2200)}> <ImBook className='icon' style={{margin: "0 2px", color: "white"}}/> Projects</span>
                <span onClick={() => scrollUp(4500)}> <AiOutlineMail className='icon' style={{margin: "0 2px"}}/> Contact</span>
            </div>
        </div>
    </div>
  )
}

export default Banner