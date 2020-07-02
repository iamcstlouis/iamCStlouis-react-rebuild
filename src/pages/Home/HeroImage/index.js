import React from 'react'
import JumbotronImage from '../../../images/home/homepg-img-mj.jpg'

import './styles.scss'

const HeroImage = () => {
    return (
        <React.Fragment>
            <div className='hero-image-wrapper'>
                <img src={JumbotronImage} alt='iamCStlouis with her painting of MJ'
                    className='hero-image' />
            </div>
        </React.Fragment>
    )
}

export default HeroImage
