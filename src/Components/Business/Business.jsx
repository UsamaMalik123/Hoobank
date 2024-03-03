import React from 'react'
import './business.css'
import Rewardelement from '../Rewardselements/Rewardelement'
import star from '../../assets/Star.svg'
import Shield from '../../assets/Shield.svg'
import Send from '../../assets/Send.svg'
const Business = () => {
  return (
    <div className='app__business section__padding' id='aboutus'>
        
        <div className='app__business-leftside  '>
            <h1>You do the business, we’ll handle the money.</h1>
            <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button type='button' className='gradient__button-bg'>Get Started</button>
        </div>
        <div className='app__business-rightside'>
            <div>
                <Rewardelement imgurl={star} heading="Rewards" text="The best credit cards offer some tantalizing combinations of promotions and prizes"/>

            </div>
            <div className='silver_gradient'>
                <Rewardelement imgurl={Shield} heading="100% Secured" text="We take proactive steps make sure your information and transactions are secure."/>

            </div>
            <div>
                <Rewardelement imgurl={Send} heading="Balance Transfer" text="A balance transfer credit card can save you a lot of money in interest charges."/>

            </div>
        </div>
    </div>
  )
}

export default Business