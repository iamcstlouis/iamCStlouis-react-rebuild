import React from 'react'

import HeroMobile from '../../../../images/about/about-page-mobile.jpg'
import HeroDesktop from '../../../../images/about/about-page-desktop.jpg'

import './styles.scss'

const Hero = () => {
    return (
        <div className='hero-image-wrapper'>
            <img src={HeroMobile} alt='iamCStlouis at work' className='hero-mobile' />

            <img src={HeroDesktop} alt='iamCStlouis at work' className='hero-desktop' />
        </div>
    )
}

export default Hero
