import React from 'react'
import './billingInvoice.css'
import billimg from '../../assets/bill.png'
import appleimg from '../../assets/apple.svg'
import googleimg from '../../assets/google.svg'

const BillingInvoice = () => {
  return (
    <div className='app_billingInvoice section__padding' id='feature'>
      <div className='app_billingInvoice-imgcaontainer'>
        <img src={billimg} alt='bill' />
      </div>
      <div className='app__billingInvoice-rightside  '>
            <h1>Easily control your billing & invoicing.</h1>
            <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className='app_billingInvoice-appsiconscontainer'>
              <img src={appleimg} alt='appleimg'/>
              <img src={googleimg} alt='googleimg'/>
               
            </div>
        </div>
    </div>
  )
}

export default BillingInvoice