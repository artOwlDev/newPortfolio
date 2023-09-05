import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <h1>FIND ME ON</h1>
        <p>Feel free to <span>connect</span> with me</p>
        <div className="contact-icons">
            <a href="https://www.linkedin.com/in/artunselcuk/" target="_blank"><FaLinkedinIn className='contact-icon'/></a>
            <a href="https://github.com/artOwlDev" target="_blank"><FiGithub className='contact-icon'/></a>
            <a href="https://www.instagram.com/artunipunii/" target="_blank"><AiOutlineInstagram className='contact-icon'/></a>
        </div>
        
          <a target="_blank" href='https://drive.google.com/file/d/11U_o3AIevDijHdtC5d9JPP0Vhlx6FI5O/view?usp=drive_link'><button>Resume</button></a>
    </div>
  )
}

export default Contact