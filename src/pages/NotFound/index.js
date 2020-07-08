import React from 'react'
import TurqBtn from '../../components/TurqBtn'

import './styles.scss'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found__content">
                <h1 className='not-found__msg' data-aos='fade-up' data-aos-delay='200'>Oops... Page not found</h1>

                <TurqBtn btnLink={'/'} btnText={'Return to Homepage?'} AOSAnimation={'fade-up'} AOSDelay={'600'} />
            </div>
        </div>
    )
}

export default NotFound