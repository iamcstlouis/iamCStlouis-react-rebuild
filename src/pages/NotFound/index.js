import React from 'react'
import TurqBtn from '../../components/TurqBtn'

import damnImage from '../../images/portfolio/sheet-music/kendrick-sm-preview.jpg';

import './styles.scss'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found__content">
                <div className="not-found__main-copy">
                    <h1 className='not-found__msg' data-aos='fade-up' data-aos-delay='200'><span className='not-found__msg not-found__msg--accent'>Damn.</span>.. Page not found!</h1>
                    <TurqBtn btnLink={'/'} btnText={'Return to Homepage?'} AOSAnimation={'fade-up'} AOSDelay={'600'} />
                </div>

                <div className="not-found__img-wrapper">
                    <div className="not-found__img">
                        <img src={damnImage} alt="404 page not found" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound