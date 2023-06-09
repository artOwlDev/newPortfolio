

import React from 'react'
import {DiJava, DiReact, DiPython, DiJavascript1} from "react-icons/di"
import {SiTypescript, SiCss3, SiCsharp} from "react-icons/si"
import {TbSql} from "react-icons/tb"
import {FaVuejs} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {BsFillBootstrapFill} from "react-icons/bs"

const Technologies = () => {
  return (
    <div className="technologies-header">
      <h1>Some of the technologies I've worked with</h1>
      <div className='technologies'>
          <div className="tech-box">
            <DiJavascript1 className='tech-icon'/>
            <h3>JavaScript</h3>
          </div>
          <div className="tech-box">
            <DiReact className='tech-icon'/>
            <h3>React.js</h3>
          </div>
          <div className="tech-box">
            <SiTypescript className='tech-icon'/>
            <h3>TypeScript.</h3>
          </div>
          <div className="tech-box">
            <DiJava className='tech-icon'/>
            <h3>Java</h3>
          </div>
          <div className="tech-box">
            <DiPython className='tech-icon'/>
            <h3>Python</h3>
          </div>
          <div className="tech-box">
            <AiFillHtml5 className='tech-icon'/>
            <h3>HTML</h3>
          </div>
          <div className="tech-box">
            <SiCss3 className='tech-icon'/>
            <h3>CSS</h3>
          </div>
          <div className="tech-box">
            <BsFillBootstrapFill className='tech-icon'/>
            <h3>Bootstrap</h3>
          </div>
          <div className="tech-box">
            <FaVuejs className="tech-icon"/>
            <h3>Vue</h3>
          </div>
          <div className="tech-box">
            <TbSql className='tech-icon'/>
            <h3>SQL</h3>
          </div>
          <div className="tech-box">
            <h4 className='tech-icon'>C</h4>
            <h3>C</h3>
          </div>
          <div className="tech-box">
            <SiCsharp className="tech-icon"/>
            <h3>C#</h3>
          </div>
      </div>

    </div>
  )
}

export default Technologies