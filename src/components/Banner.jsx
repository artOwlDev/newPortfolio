

import React, { useEffect } from 'react'
import TypewriterComponent from 'typewriter-effect'
import image from "../img/background.jpg"
import image2 from "../img/background2.avif"
import image3 from "../img/background3.avif"
import image4 from "../img/background4.jpg"
import image5 from "../img/background5.avif"
import image7 from "../img/banner7.avif"
import image8 from "../img/background8.avif"
import image9 from "../img/background9.avif"


const imagesArray = [image, image2,image2,image2, image3, image4, image5, image7, image8, image9];

import portrait from "../img/portrait2.jpeg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import {FiUser} from "react-icons/fi"
import {SiElectron} from "react-icons/si"
import {GrProjects} from "react-icons/gr"
import {ImBook} from "react-icons/im"
import {AiOutlineMail} from "react-icons/ai"

const Banner = () => {
    const randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

    const scrollUp = (vh) => {
        window.scrollTo({
            top: vh,
            behavior: 'smooth'
        })
    }

    const scrollTo = (name) => {
        console.log("Trying to scroll to:", name);
        const projectsElement = document.getElementById(name);
        if (projectsElement) {
            console.log("Element found:", projectsElement);
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Element not found:", name);
        }
    };


    useEffect(() => {
        Aos.init({
            duration: 2500,
            once: true,
            easing: "ease"
        })
    }, [])

  return (
    <div className='banner'>

        <div className="links-for-mobile">
            <span onClick={() => scrollTo("about")}> <FiUser className='icon' style={{margin: "0 2px"}}/> About</span>
            <span onClick={() => scrollTo("projects")}> <ImBook className='icon' style={{margin: "0 2px"}}/> Projects</span>
            <span onClick={() => scrollTo("technologies")}> <SiElectron className='icon' style={{margin: "0 2px"}}/> Tech-stack</span>
            <span onClick={() => scrollTo("contact")}> <AiOutlineMail className='icon' style={{margin: "0 2px"}}/> Contact</span>
        </div>
        

        <div className="banner-text">
            <h1>Artun Selçuk</h1>
            <div className="banner-line"></div>
            <div className="banner-text-p">
            <TypewriterComponent
                options={{
                    strings: ['Software Engineer', 'Computer Science @DalhousieU', 'T3 Stack Enthusiast', 'Coffee Enjoyer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    pauseFor: 900
            }}/>
            </div>
        </div>


        <div className="banner-component">
            <span onClick={() => scrollTo("about")}> <FiUser className='icon' style={{margin: "0 2px"}}/> About</span>
            <span onClick={() => scrollTo("projects")}> <ImBook className='icon' style={{margin: "0 2px"}}/> Projects</span>
            <img src={portrait} alt="" />
            <span onClick={() => scrollTo("technologies")}> <SiElectron className='icon' style={{margin: "0 2px"}}/> Tech-stack</span>
            <span onClick={() => scrollTo("contact")}> <AiOutlineMail className='icon' style={{margin: "0 2px"}}/> Contact</span>

        </div>

        

        
    </div>
  )
}

export default Banner