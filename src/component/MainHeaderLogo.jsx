import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Group from '../assets/image/icon/Group 1000004527.png'
import billion from '../assets/image/icon/Group 1000004527 (1).png'

const MainHeaderLogo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Name'>
      {windowWidth >= 1024 && <img src={Group} alt="Group" className='pic2'/> }
      {windowWidth >= 425 && <img src={billion} alt='#' className='pic2' />}            
      <h2 className='fontface'>Primbank</h2>
    </div>
  )
}

export default MainHeaderLogo