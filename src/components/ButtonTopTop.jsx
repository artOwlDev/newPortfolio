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
        <div className='button-top'>
            {showTopBtn && (
                <BsArrowBarUp onClick={scrollUp} className="button-to-top"/>
            )}
            
        </div>
    )
}

export default ButtonToTop
