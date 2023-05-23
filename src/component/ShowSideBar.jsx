import React from 'react'
import { useState } from 'react';
import menufinlly from '../assets/image/icon/FrameM 1000003743.png'
import MainHeaderLogo from './MainHeaderLogo';
import Nav from './Nav';
import {AiOutlineClose} from 'react-icons/ai'

function ShowSideBar() {

    const [isDivVisible, setDivVisible] = useState(false);
    const [isImageVisible, setImageVisible] = useState(true);

    const handleClick = () => {
      setDivVisible(!isDivVisible);
      setImageVisible(false);
    };

    const handleClose = () => {
        setDivVisible(false);
        setImageVisible(true);
      };
    
  return (
    <div className='bigman-ting'>
        {isImageVisible && ( <img className='boxo' src={menufinlly}   onClick={handleClick}
        style={{ cursor: 'pointer' }} alt="#" /> )
        }

         {isDivVisible && (
        <div className='hidden-leaf' style={{  position: 'absolute', top: 0, left: 0, zIndex: 1, padding: '1rem', marginTop: '1rem' }}>
       <div className="row-boat">
       <MainHeaderLogo/> <AiOutlineClose onClick={handleClose} style={{ cursor: 'pointer' }}/>
       </div>
         <Nav/> 
        </div>
      )}
        <p>Dashboard</p>
    </div>
  )
}

export default ShowSideBar