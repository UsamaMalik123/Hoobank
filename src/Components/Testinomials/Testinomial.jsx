import React from 'react'
import './testinomial.css'
import Testinomialelments from '../Testinomialelments/Testinomialelments'
import profile1 from '../../assets/people01.png'
import profile2 from '../../assets/people02.png'
import profile3 from '../../assets/people03.png'
const Testinomial = () => {
  return (
    <div className='app__testinomial section__padding'>
        <div className='app__testinomial-headingsection'>
        
            <h1>
              What people are saying about us
            </h1>
            <p>
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div className='app__testinomial-testinomial'>
            <div className='card__bg'>
                <Testinomialelments 
                    review="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
                    profileimg={profile1}
                    name="Herman Jensen"
                    />
            </div>
            <div>
                <Testinomialelments 
                    review="Money makes your life easier. If you're lucky to have it, you're lucky."
                    profileimg={profile2}
                    name="Steve Mark"
                    />
            </div>
            <div>
                <Testinomialelments 
                    review="It is usually people in the money business, finance, and international trade that are really rich."
                    profileimg={profile3}
                    name="Kenn Gallagher"
                    />
                
            </div>
            
        </div>

    </div>
  )
}

export default Testinomial