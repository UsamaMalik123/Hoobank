import React from 'react'
import './review.css'
const Review = () => {
  return (
    <div className='app__review section__padding'>
        <div className='app__review_users_and_numbers'>
            <h1>38000+</h1>
            <p className='gradient__para'>User Active</p>
            
       
        </div>
        
        <div className='app__review_users_and_numbers'>
            <h1>230+</h1>
            <p className='gradient__para'>Trusted By Company</p>
        
            
        </div>
      
        <div className='app__review_users_and_numbers'>
            <h1>$230M+</h1>
            <p className='gradient__para'>Transaction</p>
             

        </div>

    </div>
  )
}

export default Review