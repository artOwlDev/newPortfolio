

import React, { useEffect, useState } from 'react'
import loader from "../img/loader-owl.png"

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
        }, 300); // Adjust the interval time as needed

        return () => {
        clearInterval(intervalId);
        };
    }, []);

  return (
    <div className='loader'>
        <img src={loader} alt="" />
        <h1>Just a second{dots}</h1>
    </div>
  )
}

export default Loader