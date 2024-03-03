import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'
import instagrem from '../../assets/instagram.svg'
import fb from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>     

        <div className='app__footer-links'>
            <div className='app__footer-logoside'>
                <img src={logo} alt='logo'/>
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='app_footer-links-container '>
                <p className='app_footer-links-text'>usefull Link</p>
                <p className='app_footer-links-text'>Content</p>
                <p className='app_footer-links-text'>How it Works</p>
                <p className='app_footer-links-text'>Create</p>
                <p className='app_footer-links-text'>Explore</p>
                <p className='app_footer-links-text'>Terms & Services</p>
            </div>
            <div className='app_footer-links-container'>
                <p className='app_footer-links-text'>Community</p>
                <p className='app_footer-links-text'>Help Center</p>
                <p className='app_footer-links-text'>Partners</p>
                <p className='app_footer-links-text'>Suggestions</p>
                <p className='app_footer-links-text'>Blog</p>
                <p className='app_footer-links-text'>Newsletters</p>
            </div>
            <div className='app_footer-links-container'>
                <p className='app_footer-links-text'>Partner</p>
                <p className='app_footer-links-text'>Our Partner</p>
                <p className='app_footer-links-text'>Become a Partner</p>
                 
            </div>
            

        </div>
        <div className='border'/>
        <div className='app__footer-bottomlay'>
            <div className='app__footer-bottomlay-left'>
                <p>Copyright c 2021 HooBank. All Rights Reserved.</p>   
            </div>
            <div className='app__footer-bottomlayright'>
                <img src={instagrem} alt='instagram'/>
                <img src={fb} alt='fb' />
                <img src={twitter} alt='twitter'/>
                <img src={linkedin} alt='linkedin'/>
            </div>

        </div>
    </div>
  )
}

export default Footer