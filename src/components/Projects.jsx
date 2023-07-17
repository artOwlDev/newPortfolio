

import React from 'react'
import foodie from '../img/foodie.jpeg'
import pixelton from "../img/pixelton.jpeg"
import whisper from "../img/whispr.jpg"
import staysafe from "../img/staysafe.jpeg"
import {FiGithub} from "react-icons/fi"
import {HiOutlineExternalLink} from "react-icons/hi"

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='projects-h1'>Projects</h1>
        <div className="projects-box">
            <div className="projects-image">
                <img src={whisper} alt="" />
            </div>
            <div className="projects-info">
                <div className="project-name">
                    <h1>Whispr - </h1>
                    <p>March 2023 - present</p>
                </div>
                
                
                <div className="project-technologies">
                    <span>React.js</span>
                    <span>Firebase</span>
                    <span>TMDB API</span>
                </div>
                <p>Web app that serves as a social platform for users to rate, review, share their thought on movies and TV-series.</p>
                <div className="project-links">
                    <a href="https://github.com/artOwlDev/newWhisper" target="_blank"><FiGithub className='project-icons'/></a>
                    <a href="https://www.whispr.tv" target="_blank"><HiOutlineExternalLink className='project-icons'/></a>

                </div>
            </div>
        </div>
        <div className="projects-box">
            <div className="projects-image">
                <img src={staysafe} alt="" />
            </div>
            <div className="projects-info">
                <div className="project-name">
                    <h1>StaySafe - </h1>
                    <p>August 2022</p>
                </div>

                <div className="project-technologies">
                    <span>React.js</span>
                    <span>Google Maps API</span>
                    <span>NASA EONET API</span>
                </div>

                <p>Web app that aims to provide real-time information to users about nearby natural disasters such as volcanoes, wildfires, tropical storms etc.</p>
                <div className="project-links">
                    <a href="https://github.com/artOwlDev/StaySafe" target="_blank"><FiGithub className='project-icons'/></a>
                    <a href="https://www.stay-safe.live/" target="_blank"><HiOutlineExternalLink className='project-icons'/></a>
                </div>
            </div>
            

        </div>
        <div className="projects-box">
            <div className="projects-image">
                <img src={pixelton} alt="" />
            </div>
            <div className="projects-info">
                <div className="project-name">
                    <h1>Pixelton - </h1>
                    <p>February 2022</p>
                </div>
                <div className="project-technologies">
                    <span>React.js</span>
                    <span>React Color</span>
                </div>
                <p>Web app where users can quickly create and export pixel art.</p>
                <div className="project-links">
                    <a href="https://github.com/artOwlDev/pixel-art-maker" target="_blank"><FiGithub className='project-icons'/></a>
                    <a href="https://www.pixelton.art/" target="_blank"><HiOutlineExternalLink className='project-icons'/></a>
                </div>
                
            </div>
        </div>
        <div className="projects-box">
            <div className="projects-image">
                <img src={foodie} alt="" />
            </div>
            <div className="projects-info">
                <div className="project-name">
                    <h1>Fooodie - </h1>
                    <p>February 2022</p>
                </div>
                <div className="project-technologies">
                    <span>React.js</span>
                    <span>Styled Components</span>
                    <span>Spoonacular API</span>
                </div>
                <p>Web app that lets users view the recipes to their favorite dishes. Supports over 5000+ recipes.</p>
                <div className="project-links">
                    <a href="https://github.com/artOwlDev/fooodie" target="_blank"><FiGithub className='project-icons'/></a>
                    <a href="https://www.fooodie.info/" target="_blank"><HiOutlineExternalLink className='project-icons'/></a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects