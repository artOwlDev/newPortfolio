

import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState({
    linkedin: false,
    github: false,
    resume: false,
    instagram: false
  });

  // Function to handle mouse enter
  const handleMouseEnter = (icon) => {
      setIsHovered({ ...isHovered, [icon]: true });
  };

  // Function to handle mouse leave
  const handleMouseLeave = (icon) => {
      setIsHovered({ ...isHovered, [icon]: false });
  };

  return (
    <div className='sidebar-container'>

        <div className="sidebar">

            <SocialIcon 
                url="https://www.linkedin.com/in/artunselcuk/"
                bgColor={isHovered.linkedin ? "#037fb1" : "#121212"}
                fgColor="white"
                className='social-icon linkedin'
                onMouseEnter={() => handleMouseEnter('linkedin')}
                onMouseLeave={() => handleMouseLeave('linkedin')}
            />            
            <SocialIcon 
              url="https://github.com/artOwlDev" 
              fgColor="white" 
              bgColor={isHovered.github ? "#24292d" : "#121212"}
              className='social-icon github' 
              onMouseEnter={() => handleMouseEnter('github')}
              onMouseLeave={() => handleMouseLeave('github')}
            />

            <SocialIcon url="https://drive.google.com/file/d/1-Kg3FtUAsR8WvvKZWtZXfuH3S_ogYrF3/view" 
              fgColor="white" 
              bgColor={isHovered.resume ? "#dc4b39" : "#121212"}
              className='social-icon resume'
              onMouseEnter={() => handleMouseEnter('resume')}
              onMouseLeave={() => handleMouseLeave('resume')}
            />
            <SocialIcon 
              url="https://www.instagram.com/artunipunii/" 
              fgColor="white" 
              bgColor={isHovered.instagram ? "#C13584" : "#121212"} 
              className='social-icon ig'
              onMouseEnter={() => handleMouseEnter('instagram')}
              onMouseLeave={() => handleMouseLeave('instagram')}
            />
        </div>

    </div>
  )
}

export default Sidebar