

import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai"



const Footer = () => {
  return (
    <div className='footer'>
        <h1>Artun Selcuk © 2023 </h1>
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/artunselcuk/" target="_blank"><AiFillLinkedin className='footer-icon'/></a>
            <a href="https://github.com/artOwlDev" target="_blank"><AiFillGithub  className='footer-icon'/></a>
            <a href="https://www.instagram.com/artunipunii/" target="_blank"><AiFillInstagram  className='footer-icon'/></a>
        </div>

    </div>
  )
}

export default Footer