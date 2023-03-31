import React from 'react'
import SearchBarView from './SearchBarView'
import UserNotification from './UserNotification'
import Group from '../assets/image/icon/Group 1000004527.png'
import Nav from './Nav'
import Main from './Main'


const BankingDashboard = () => {
  return (
    <div className='Bank' >
        <div className='Nav'>
                <div className='Name'>
                    <img src={Group} alt="Group" className='pic2'/>
                    <h2 className='fontface'>Primbank</h2>
                </div>

                <div>
                    <Nav/>
                </div>
        </div>

    <div className='mid-sction'>
        
        <div className='Header'>
            <div>
                <SearchBarView/>
            </div>

            <div>
                <UserNotification/>
            </div>
        </div>
       

       <div className='section'>
        <Main/>
        </div>
    </div>


    </div>
  )
}

export default BankingDashboard