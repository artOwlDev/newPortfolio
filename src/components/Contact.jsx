import React, { useEffect } from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true,
        easing: "ease"
    })
}, [])

  return (
    <div id='contact' className='contact' data-aos="fade-up">
        <h1>FIND ME ON</h1>
        <p>Feel free to <span>connect</span> with me</p>
        <div className="contact-icons">
            <a href="https://www.linkedin.com/in/artunselcuk/" target="_blank"><FaLinkedinIn className='contact-icon'/></a>
            <a href="https://github.com/artOwlDev" target="_blank"><FiGithub className='contact-icon'/></a>
            <a href="https://www.instagram.com/artunipunii/" target="_blank"><AiOutlineInstagram className='contact-icon'/></a>
        </div>
        
          <a target="_blank" href='https://drive.google.com/file/d/1XlWu_hfPczvkmibA1zen50e_pOLvAmsf/view?usp=drive_link'><button>Resume</button></a>
    </div>
  )
}

export default Contact