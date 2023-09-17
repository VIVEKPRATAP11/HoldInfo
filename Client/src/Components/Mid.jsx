import React from 'react'
import Midcard from './Midcard'

const Mid = () => {
  return (
    <div className='main-mid '>
    <div><p className='heading'>Best Price to Trade</p></div>
    <div className='display-between displayFlexCenter'>
        <Midcard percent={"0.04 %"} time={"5 Mins"}/>
        <Midcard percent={"0.17 %"} time={"1 Hour"}/>
        <h1 className='Main-number'>
        ₹ 25,18,086
        </h1>
        <Midcard percent={"8.46 %"} time={"1 Day"}/>
        <Midcard percent={"9.93 %"} time={"7 Days"}/>
        
    </div>
    <div><p className='para'>Average BTC/INR net price including commission</p></div>
      
    </div>
  )
}

export default Mid
