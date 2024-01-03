

import React from 'react'
import whisper from "../img/whispr.jpg"
import dalhousie from "../img/dalhousie.jpg"
import whispr from "../img/whisprLogo.jpg"
import freelance from "../img/freelance.jpg"


const Experience = () => {
  return (
    <div className='experience' id='experience'>
        <div className='header-div'>
            <h1>Experience</h1>
        </div>

        <div className="experience-box">
            <div className="experience-box-left">
                <img src={dalhousie}/>
            </div>
            <div className="experience-box-right">
                <div className="experience-box-right-header">
                    <h1>Teaching Assistant @ Dalhousie University</h1>
                    <p>Sept '23 - Dec '23</p>
                </div>
                <div className="experience-box-right-details">
                    <p>- Conduct weekly tutorials for over 50+ students in the course Data Structures and Algorithms(CSCI2110)</p>
                    <p>- Proficiently explain complex technical concepts(BFS, DFS, heaps, graphing, sorting algorithms etc.) to ensure students’ comprehension.</p>
                </div>
            </div>
        </div>
        <div className="experience-box">
            <div className="experience-box-left">
                <img src={whispr}/>
            </div>
            <div className="experience-box-right">
                <div className="experience-box-right-header">
                    <h1>Founder / Developer @ Whispr</h1>
                    <p>Mar '23 - Present</p>
                </div>
                <div className="experience-box-right-details">
                    <p>Conduct weekly tutorials for over 50+ students in the course Data Structures and Algorithms(CSCI2110)</p>
                </div>
            </div>
        </div>
        <div className="experience-box">
            <div className="experience-box-left">
                <img src={freelance}/>
            </div>
            <div className="experience-box-right">
                <div className="experience-box-right-header">
                    <h1>Freelance Developer</h1>
                    <p>Sept '22 - Present</p>
                </div>
                <div className="experience-box-right-details">
                    <p>Developing websites for local businesses, creating user-friendly online platforms that effectively represent each business's unique brand and services.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience