

import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>

        <div className="sidebar">

            <SocialIcon url="https://linkedin.com/in/couetilc" fgColor="#FFFFFF" className='social-icon linkedin'/>
            <SocialIcon url="https://github.com/artOwlDev" fgColor="#FFFFFF" className='social-icon github'/>
            <SocialIcon url="https://drive.google.com/file/d/1-Kg3FtUAsR8WvvKZWtZXfuH3S_ogYrF3/view" fgColor="#FFFFFF" className='social-icon resume'/>
            <SocialIcon url="https://www.instagram.com/artunipunii/" fgColor="#FFFFFF" bgColor="transparent" className='social-icon ig'/>
        </div>

    </div>
  )
}

export default Sidebar