import React from 'react'
import Bitcoin from "../assets/image/icon/image 165.png"
import lady  from '../assets/image/icon/Ellipse 357.png'
import paypal from '../assets/image/icon/image 166.png'

const Last = () => {
  return (
    <div className='Ben'>
        <div className='Bitcoin'>
                <div className='Bitcoin-img'>
                    <img src={Bitcoin} alt="" />
                    <p>Bitcoin Transactions</p>
                </div>

                <div className='Bitcoin-text'>
                <p>Mar 20, 2023</p>
                <p>*****45242</p>
                <p>-$853.00</p>
                <button className='complete'><p className='accept'>completed</p></button>
                </div>
        </div>
        <div className='seperate'></div>

        <div className='Bitcoin'>
                <div className='Bitcoin-img'>
                    <img src={lady} alt="" />
                    <p>Sent to anitonia</p>
                </div>

                <div className='Bitcoin-text'>
                <p>Mar 20, 2023</p>
                <p>*****45242</p>
                <p>-$853.00</p>
                <button className='pending'><p className='pend'>pending</p></button>
                </div>
        </div>
        <div className='seperate'></div>

        <div className='Bitcoin'>
                <div className='Bitcoin-img'>
                    <img src={paypal} alt="" />
                    <p >Withdraw Paypal</p>
                </div>

                <div className='Bitcoin-text'>
                <p>Mar 20, 2023</p>
                <p>*****45242</p>
                <p>-$853.00</p>
                <button className='reject'><p className='rejected'>cancelled</p></button>
                </div>
        </div>
        <div className='seperate'></div>
    </div>

  )
}

export default Last