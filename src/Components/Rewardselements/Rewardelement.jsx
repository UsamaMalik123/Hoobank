import React from 'react'
import {star} from '../../assets/Star.svg'
import './rewardelement.css'
const Rewardelement = (props) => {
  return (
    <div className='app__business-rewardselements'>
        <div className='app__business-rewardselements-img'>
            <img src={props.imgurl}/>
        </div>
        <div className='app__business-rewardselements-texts'>
            <p>{props.heading}</p>
            <p>{props.text}</p>
            
            
        </div>
    </div>
  )
}

export default Rewardelement