import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {FiGithub} from "react-icons/fi"

const Contact = () => {
  return (
    <div className='contact'>
        <h1>FIND ME ON</h1>
        <p>Feel free to <span>connect</span> with me</p>
        <div className="contact-icons">
            <a href="https://www.linkedin.com/in/artunselcuk/" target="_blank"><FaLinkedinIn className='contact-icon'/></a>
            <a href="https://github.com/artOwlDev" target="_blank"><FiGithub className='contact-icon'/></a>
            <a href="https://www.instagram.com/artunipunii/" arget="_blank"><AiOutlineInstagram className='contact-icon'/></a>
        </div>
    </div>
  )
}

export default Contact