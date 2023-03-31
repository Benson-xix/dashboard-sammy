import React from 'react'
import ChartLine from './ChartLine';
import Group1 from '../assets/image/icon/Group 1000004536.png'
import eye1 from '../assets/image/icon/Frame (1).png'
import arrow1 from '../assets/image/icon/Vector (8).png'
import plus from '../assets/image/icon/fluent_add-circle-32-filled.png'
import give from '../assets/image/icon/Vector (9).png'
import take from '../assets/image/icon/Vector (10).png'
import uparrow from '../assets/image/icon/Group.png'
import updown from '../assets/image/icon/Group 941.png'
import upthings from '../assets/image/icon/Group (1).png'
import group1000 from '../assets/image/icon/Group1000.png'
import upgreen from '../assets/image/icon/Group (2).png'
import drop from '../assets/image/icon/Vector (12).png'
import ExxpenseLine from './ExxpenseLine';
import ProgressBar from './ProgressBar';
import TimeLine from './TimeLine';
import papper from '../assets/image/icon/Vector (13).png'
import ExpenseInvest from './ExpenseInvest';
import redSun from '../assets/image/icon/Ellipse 463.png'
import greeSun from '../assets/image/icon/Ellipse 464.png'
import dotman1 from '../assets/image/icon/Dot2.png'
import dotman2 from '../assets/image/icon/Dot2 (1).png'
import downkey from '../assets/image/icon/Vector (14).png'
import download from '../assets/image/icon/Frame (2).png'
import Last from './Last';


const Main = () => {
    const testData = [
        { bgcolor: "#22B573", 
            completed: 50
        },
      ];
    
  return (
    <div>
        <div className='head'>

        <div style={{position:"relative", width:"398px", height:"247px", margin:"1em" }}>

             <div style={{ position:"absolute",   width:"354px" , height:"186px", top:"71px", left:"22px", borderRadius:"20.16px", backgroundColor:"#C78A8F", display:"flex", flexDirection:"row"}}>
                <img src={Group1} alt="group1" style={{width:"150px", position:"absolute", height:"150px", top:"103px", left:"100px",}} />
                <p style={{fontFamily:"Poppins", fontStyle:"normal", fontW:"500px", position:"absolute", color:"white",  top:"159px", left:"230px", fontSize:"16px", lineHeight:"24px"}}>Samuel john</p>
             </div>
            <div style={{ position:"absolute", width:"398px", height:"209.44px", top:"10px", background:"#7758D4", borderRadius:"22.66px", display:"flex", flexDirection:"column" }}>
               
                <div className='stan'>
                   <div className='eye'> 
                    <p>Total balance</p>
                    <img src={eye1} alt="eye1" />
                   </div>

                   <div className='arrow'>
                    <p>Transaction History</p>
                    <img src={arrow1} alt="arrow"/>
                   </div>
                </div>
            <div style ={{marginTop:".3em", marginLeft:"2.3em"}}> *** *** ***</div>

            <div style={{display:"flex", flexDirection:"row", marginTop:"4em", marginLeft:"2.7em", gap:"40px"}}>
                <div style={{display:"flex", flexDirection:"column"}} >
                    <div style={{ width:"30px", height:"30px",background:"rgba(255, 255, 255, 0.37)", marginLeft:"2em", borderRadius:"3.96px",  padding:".4em", transform: " matrix(1, 0, 0, -1, 0, 0)"}}> 
                        <img src={plus} alt="plus" style={{width:"17.5px", height:"17.5px",}} />
                    </div>
                   
                    <p>Add money</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div  style={{ width:"30px", height:"30px",background:"rgba(255, 255, 255, 0.37)", marginLeft:"1em", borderRadius:"3.96px",  padding:".4em", transform: " matrix(1, 0, 0, -1, 0, 0)"}}>
                    <img src={give} alt="give" style={{width:"15px", height:"15px",}} />
                    </div>
                  
                    <p>Transfer</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{ width:"30px", height:"30px",background:"rgba(255, 255, 255, 0.37)", marginLeft:"1.5em", borderRadius:"3.96px", padding:".4em", transform: " matrix(1, 0, 0, -1, 0, 0)"}}>
                    <img src={take} alt="take" style={{width:"17.25px", height:"17.25px",}} />
                    </div>
                    
                    <p>Withdraw</p>
                </div>
            </div>

            </div>
           
        </div>

        <div className='income'>
            <div className='up'>
                <h4>Income</h4>

                <div className='weird'>
                    <img src={uparrow} alt="uparrow" className='boom' />
                    <div className='guy'>
                     <img src={updown} alt="updown" className='boom2' />   
                    </div>
                </div>
            </div>

            <div >
                <div style={{display:"flex", flexDirection:"row", marginLeft:"1em", marginTop:"1em", gap:"1em"}}>
                    <div style={{width:"13.42px", height:"13.42px", background:"#22B573", padding:".8em", borderRadius:"100%", position:"relative" }}>
                    <img src={upthings} alt="upthings" style={{width:"15.05px", height:"9.36px",  color:"#ffffff", position:"absolute", top:"8px", right:"5px" }} /> 
                    </div>

                    <div style={{marginTop:".5em",display:"flex", flexDirection:"row", gap:"1em"}}>
                    <p style={{color:"#141736", fontFamily:"Poppins", fontStyle:"normal", fontSize:"9.4px", fontWeight:"400", lineHeight:"14px"}}>Savings</p>
                    <img src={upgreen} alt="uparrow" style={{width:"25.05px", height:"11.36px",}} />
                    <p  style={{color:"#7C8DA7", fontFamily:"Poppins", fontStyle:"normal", fontWeight:"600", fontSize:"9.4px", lineHeight:"14px"}}>+6,79%</p>
                    </div>

                    <div>
                        <div style={{display:"flex", flexDirection:"row",  marginLeft:"4em", gap:".5em", padding:".4em", borderRadius:"11.8746px", width:"65.42px", height:"26.42px", border:"0.670819px solid #E5E9F4" }} >
                            <h4 style={{color:"#141736", fontFamily:"Poppins", fontStyle:"normal", fontWeight:"400", fontSize:"9.4px", lineHeight:"14px"}}>Week</h4>
                            <img src={drop} alt="drop" style={{width:"15.05px", height:"9.36px", marginRight:"1em",  marginTop:".1em"}} />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div>
                <ChartLine/>
            </div>
        </div>
           <br />
        <div className='expense'>
        <div className='down'>
                <h4>Expenses</h4>

                <div className='weird'>
                    <img src={group1000} alt="uparrow" className='boom1' />
                    <div className='guy1'>
                     <img src={updown} alt="updown" className='boom3' />   
                    </div>
                </div>
            </div>

            <div >
                <div style={{display:"flex", flexDirection:"row", marginLeft:"1em", marginTop:"1em", gap:"1em"}}>
                    <div style={{width:"13.42px", height:"13.42px", background:"#7468E4", padding:".8em", borderRadius:"100%", position:"relative" }}>
                    <img src={group1000} alt="group1000" style={{width:"15.05px", height:"9.36px",  color:"#ffffff", position:"absolute", top:"8px", right:"5px" }} /> 
                    </div>

                    <div style={{marginTop:".5em",display:"flex", flexDirection:"row", gap:"1em"}}>
                    <p style={{color:"#141736", fontFamily:"Poppins", fontStyle:"normal", fontSize:"9.4px", fontWeight:"400", lineHeight:"14px"}}>$20,000</p>
                    
                    </div>

                    <div>
                        <div style={{display:"flex", flexDirection:"row",  marginLeft:"4em", gap:".5em", padding:".4em", borderRadius:"11.8746px", width:"65.42px", height:"26.42px", border:"0.670819px solid #E5E9F4" }} >
                            <h4 style={{color:"#141736", fontFamily:"Poppins", fontStyle:"normal", fontWeight:"400", fontSize:"9.4px", lineHeight:"14px"}}>Week</h4>
                            <img src={drop} alt="drop" style={{width:"15.05px", height:"9.36px", marginRight:"1em",  marginTop:".1em"}} />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div>
                <ExxpenseLine/>
            </div>
        </div>
        </div>

        <div className='second'>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"column", width:"398px", height:"138px", background:"#ffffff", marginTop:".8em", marginLeft:"1em", border:" 2px solid rgba(118, 118, 118, 0.05)", borderRadius:" 10px",}}>
                    <h3 className='text'>Available Balance</h3>
                    <p className='p'>$40,000,000</p>
                </div>
                <div  style={{display:"flex", flexDirection:"column", width:"390px", order:"1", height:"217px", background:"#ffffff", paddingTop:"1.5em", marginTop:".8em", marginLeft:"1em", border:" 2px solid rgba(118, 118, 118, 0.05)", borderRadius:" 10px",}}>
                <p className='q'>Spending Limit</p>
                <p className='R'>daily transaction</p>
                {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>))}
                </div>
                
                <div style={{display:"flex", flexDirection:"column", width:"390px", order:"2", height:"302px", background:"#ffffff", marginTop:".8em", marginLeft:"1em", border:" 2px solid rgba(118, 118, 118, 0.05)", borderRadius:" 10px",}}>
                  <div className='deal'>  
                    <h4 >Recent activity</h4>
                    <p >view statement</p>
                    <img src={papper} alt="" />
                    </div>
                    <TimeLine/>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"column", width:"748px",  height:"415px", background:"#ffffff", marginTop:".8em", marginLeft:"1em", border:" 2px solid rgba(118, 118, 118, 0.05)", borderRadius:" 10px",}}>
                  <h2 className='overview'>transaction overview</h2>
                <div className='main-overview'>
                <img src={redSun} alt="" /> <p>Money in</p>
                <img src={greeSun} alt="" /> <p>Money out</p>
                <div className='sub-overview'>
                    <img src={dotman1} alt="" /> <p>Monthly</p>
                    <img src={dotman2} alt="" /> <p>Weekly</p>
                </div>
                </div>
                <ExpenseInvest/>
            </div>

            <div style={{display:"flex", flexDirection:"column",  width:"743px", order:"1", height:"257px", background:"#ffffff", marginTop:".8em", marginLeft:"1em", border:" 2px solid rgba(118, 118, 118, 0.05)", borderRadius:" 10px",}}>
            <div className='transaction'>
                            <h3>Recent Transaction</h3>
                            <div className='see'>
                            <p>All</p>
                            <img src={downkey} alt="" className='downkey' />
                             <p>Monthly</p>
                             <img src={downkey} alt="" className='downkey' />
                             <p>Yearly</p>
                             <img src={download} alt="" className='download' />
                            </div>
            </div>

            <Last/>
            </div>
            </div>
           </div> 
        
    </div>

    
  )
}

export default Main