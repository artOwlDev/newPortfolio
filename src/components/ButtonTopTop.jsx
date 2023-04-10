import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {BsArrowBarUp} from "react-icons/bs"

const ButtonToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {showTopBtn && (
                <BsArrowBarUp style={{position: 'fixed', left: '1rem', bottom: '1rem' , color: 'white', cursor: 'pointer', transition: 'all 0.5s ease', fontSize: "1.4rem"}}onClick={scrollUp}/>
            )}
            
        </div>
    )
}

export default ButtonToTop
