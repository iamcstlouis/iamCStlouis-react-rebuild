import React from 'react'
import HeroImage from '../../../../images/home/homepg-img-mj.jpg'

import './styles.scss'

const Hero = () => {
    return (
        <React.Fragment>
            <div className='hero-image-wrapper' data-aos='fade-up'>
                <img src={HeroImage} alt='iamCStlouis with her painting of MJ'
                    className='hero-image' />
            </div>
        </React.Fragment>
    )
}

export default Hero
