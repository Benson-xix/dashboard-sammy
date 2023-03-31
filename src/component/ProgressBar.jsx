import React from 'react'
import dot1 from '../assets/image/icon/Ellipse 961.png'
import dot2 from '../assets/image/icon/Ellipse 961 (1).png'


const ProgressBar = (props) => {
    const { bgcolor } = props;
    
  const containerStyles = {
    height: 20,
    width: '340px',
    backgroundColor: "#e0e0de",
    borderRadius: '18px',
    marginTop: '1em',
    marginLeft: '1em'
  }

  const fillerStyles = {
    height: '100%',
    width: "170px",
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return (
    <div  style={containerStyles}   >
    <div style={fillerStyles}>
    </div>
    <p className='r'>50%</p> 
    
    <div className='btn-gang'>
        <div style={{display:"flex", flexDirection:"row"}}>
            <img src={dot1} alt="" className='dot44' />
            <p>Outstanding</p>
        </div>
        
        <div style={{display:"flex", flexDirection:"row"}}>
            <img src={dot2} alt="" className='dot44'/>
            <p>Avaliable</p>
        <div className='btn'>
            <button>
            <p className='green'>Pay now</p>
            </button>
        </div>
        </div>
    </div>
  </div>
  

  )
}

export default ProgressBar