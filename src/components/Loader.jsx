

import React, { useEffect, useState } from 'react'
import loader from "../img/loader-owl6.png"
import altloader from "../img/artunselcuk.png"

const Loader = () => {
    const [dots, setDots] = useState('');
  
    useEffect(() => {
        const intervalId = setInterval(() => {
        setDots(prevDots => {
            if (prevDots === '...') {
            return '';
            } else {
            return prevDots + '.';
            }
        });
        },400); // Adjust the interval time as needed

        return () => {
        clearInterval(intervalId);
        };
    }, []);

  return (
    <div className='loader'>
        <img src={altloader} alt="" />
        <p>Just a second{dots}</p>
    </div>
  )
}

export default Loader