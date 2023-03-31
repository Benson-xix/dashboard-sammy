import React from 'react'
import Vector from '../assets/image/icon/Vector.png'
import Eclipse from '../assets/image/icon/Ellipse 463.png'
import avatar from '../assets/image/images/derick-mckinney-243Q39DzM3M-unsplash.png'
import Eclipse2 from '../assets/image/icon/Ellipse 464.png'


const UserNotification = () => {
  return (
    <div className='icon'>
          <div className='push'>
          <img src={Vector} alt="Vector" className='small' />
            <img src={Eclipse} alt="Vector" className='smaller' />
          </div>

          <div className='pic'>
          <img src={avatar} alt="Vector" className='pic1' />
          <img src={Eclipse2} alt="Vector" className='dot1' />
          </div>

          <div className='text'>
            <h4>Samuel</h4>
            <p>samuel@gmail.com</p>
          </div>
    </div>
  )
}

export default UserNotification