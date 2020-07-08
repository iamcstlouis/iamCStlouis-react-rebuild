import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const TurqBtn = ({ btnLink, AOSAnimation, AOSDelay, btnText }) => {
    return (
        <div className='turq-btn-wrapper'>
            <div className='btn' data-aos={AOSAnimation} data-aos-delay={AOSDelay}>
                <Link to={btnLink}>{btnText}</Link>
            </div>
        </div>
    )
}

export default TurqBtn
