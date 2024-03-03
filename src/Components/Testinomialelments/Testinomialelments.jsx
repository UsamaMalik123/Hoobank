import React from 'react'
import Qoutes from '../../assets/quotes.svg'
import './testinomialelments.css'
const Testinomialelments = (props) => {
  return (
    <div className='app_Testinomialelments'>
      
      <div className='app_Testinomialelments-qoutes-img'>
        <img src={Qoutes}/>
      </div>
      <p className='app_Testinomialelments-review'>{props.review}</p>
      <div className='app_Testinomialelments-profile'>
        <img src={props.profileimg}/>
        <div className='app_Testinomialelments-profile-context'>
          <p>{props.name}</p>
          <p>Founder & Leader</p>
        </div>
      </div>
    </div>
  )
}

export default Testinomialelments