import React from 'react'
import SearchBarView from './SearchBarView'
import UserNotification from './UserNotification'
import Nav from './Nav'
import Main from './Main'
import ShowSideBar from './ShowSideBar'
import MainHeaderLogo from './MainHeaderLogo'


const BankingDashboard = () => {
  return (
    <div className='Bank' >
        <div className='Nav'>

            <div>
                <MainHeaderLogo/>
            </div>
                

                <div>
                    <Nav/>
                </div>
        </div>

    <div className='mid-sction'>
        
        <div className='Header'>
            <div className='svpush'>
                <SearchBarView/>
            </div>

           

            <div className='ss-bar'>
            <div className="show-side-br">
            <ShowSideBar/>
            </div>
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