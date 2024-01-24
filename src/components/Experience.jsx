

import React, { useEffect } from 'react'
import whisper from "../img/whispr.jpg"
import dalhousie from "../img/dalhousie.jpg"
import whispr from "../img/whisprLogo.jpg"
import freelance from "../img/freelance.jpg"
import vosyn from "../img/vosyn.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';


const Experience = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: true,
            easing: "ease"
        })
    }, [])


  return (
    <div className='experience' id='experience' data-aos="fade-in">
            
        <div className='header-div'>
            <h1>Experience</h1>
        </div>

        <div className="experience-box">
            <div className="experience-box-left">
                <img src={vosyn}/>
            </div>
            <div className="experience-box-right">
                <div className="experience-box-right-header">
                    <h1>Software Engineer Intern @ Vosyn</h1>
                    <p>Jan '24 - present</p>
                </div>
                <div className="experience-box-right-details">
                    <p>- Working on the frontend platform.</p>
                </div>
            </div>
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
                    <p>Social platform that lets users share their thoughts and rate their favorite Movies and TV-series.</p>
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