import React from 'react'
import Vector2 from '../assets/image/icon/Vector2.png'
import Vector3 from '../assets/image/icon/Vector (1).png'
import Vector4 from '../assets/image/icon/Vector (2).png'
import Vector5 from '../assets/image/icon/Vector (3).png'
import Vector6 from '../assets/image/icon/Vector (4).png'
import Vector7 from '../assets/image/icon/Vector (5).png'
import Vector8 from '../assets/image/icon/Frame.png'
import Vector9 from '../assets/image/icon/Vector (7).png'


const Nav = () => {
  return (
    <nav className='nav1'>
     <div className='main-nav'>
     <ul className='li-beloved'>
        <li  className={window.innerWidth <= 768 ? 'mute' : ''} style={{backgroundColor: window.innerWidth <= 768 ? '' : 'white', borderRadius: window.innerWidth <= 768 ? '' : '7.56198px', width: window.innerWidth <= 768 ? '' : '236.94px', height: window.innerWidth <= 425 ? '' : '60.5px', paddingLeft: window.innerWidth <= 768 ? '' : '1em', marginRight: window.innerWidth <= 768 ? '' : '2em'}} >
       
            <img src={Vector2} alt="Vector2" />
            { <a className='mute' style={{color: "#5A57FE"}}href="/">Dashboard</a> 
            /* window.innerWidth <= 768 ? 'mute' : '' */}
           
        </li>
        <li>
            <img src={Vector3} alt="Vector(1)" />
            <a className='mute' href="">My account</a>
        </li>
        <li>
            <img src={Vector4} alt="Vector(2)" />
            <a className='mute' href="">My card</a>
            
        </li>
        <li>
             <img src={Vector5} alt="Vector(3)" />
            <a className='mute' href="">Fund transfer</a>
           
        </li>
        <li>
            <img src={Vector6} alt="Vector(4)" />
            <a className='mute' href="">Bill payment</a>
            
        </li>
        <li>
            <img src={Vector7} alt="Vector(5)" />
            <a className='mute' href="">Support</a>
            
        </li>
     </ul>
     </div>

     <div className='support-nav'>
        <ul>
            <li>
                <img src={Vector8} alt="Vector(6)" />
                <a className='mute' href="">Settings</a>
                
            </li>
            <li>
                <img src={Vector9} alt="Vector(7)" />
                <a className='mute' href="">Log out</a>
                
            </li>
        </ul>
     </div>
    </nav>
  )
}

export default Nav