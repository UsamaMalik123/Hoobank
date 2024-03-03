import React from 'react'
import './social.css'
import airbnd from '../../assets/airbnb.png'
import binance from '../../assets/binance.png'
import coinbase from '../../assets/coinbase.png'
import dropbox from '../../assets/dropbox.png'
const Social = () => {
  return (
    <div className='app__social section__padding'>
         <img  className='img_property' src={airbnd} alt='airbnb'/>
         <img className='img_property' src={binance} alt='binance'/>
         <img className='img_property' src={coinbase} alt='coinbase'/>
         <img className='img_property' src={dropbox} alt='dropbox'/>
        
        
        
        
    </div>
  )
}

export default Social