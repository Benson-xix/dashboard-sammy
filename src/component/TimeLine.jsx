import React from 'react'
import female from '../assets/image/icon/Female05.png'
import male from '../assets/image/icon/Male11.png'
import female2 from '../assets/image/icon/Female05 (1).png'
import female3 from '../assets/image/icon/3D08.png'


const TimeLine = () => {
  return (
    <div className='timeline'>
       <div className='timeline-content'>
        <span className="tag">
    <div className='help'> 
    <img src={female} alt=""  />
    <h4>UPI/P2M/300765</h4> <p>RS:1000</p></div>
    <div className='box'>
    <div className='divide'></div> <p>samuel/kuda/paying</p>
    </div>
        </span>
            
        <span className="tag">
    <div className='help'>
    <img src={female2} alt=""  />
    <h4>UPI/P2M/300765</h4>  <p>RS:1000</p>
    </div>
    <div className='box'>
    <div className='divide'></div> <p>samuel/kuda/paying</p>
    </div>
        </span>

        <span className="tag">
        <div className='help'>
        <img src={female3} alt=""  />
    <h4>UPI/P2M/300765</h4>  <p>RS:1000</p>
        </div>
    <div className='box'>
    <div className='divide'></div> <p>samuel/kuda/paying</p>
    </div>
        </span>

        <span className="tag">
   <div className='help'>
   <img src={male} alt=""  />
    <h4>UPI/P2M/300765</h4>  <p>RS:1000</p>
   </div>
   <div className='box'>
    <div className='divide'></div> <p>samuel/kuda/paying</p>
    </div>
        </span> 
       </div>
    </div>
  )
}

export default TimeLine

