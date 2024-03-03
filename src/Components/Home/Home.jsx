import React from 'react'
import './home.css'
import logo from '../../assets/logo.svg'
import robot from '../../assets/robot.png'
const Home = () => {
  return (
    <div className='app__home section__padding' id='home'>
        <div className='app__home-contentsection  '>
            <div className='app__home-contentsection-top'>
                <img src={logo}/>
                <p>20% DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
            </div>
            <div className='app__home-contentsection-nextgenimg'>
                <h1>The Next <span className='gradien__color'>Generation </span> Payment Method</h1>
                <img src={logo}/>
            </div>
            <p className='app__home-contentsection-nextgenimg-para'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.</p>
        </div>
        <div className='app__home-imgsection flex__center'>
            <img src={robot} alt=''/>
        </div>
    </div>
  )
}

export default Home