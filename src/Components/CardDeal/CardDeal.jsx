import React from 'react'
import './carddeal.css'
import binance from '../../assets/card.png'
const CardDeal = () => {
  return (
    <div className='app__carddeal section__padding'>
      <div className='app__carddeal-leftside  '>
            <h1>You do the business, we’ll handle the money.</h1>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button type='button' className='gradient__button-bg'>Get Started</button>
        </div>
        <div className='app__carddeal-img'>
          <img src={binance}/>
        </div>
    </div>
  )
}

export default CardDeal