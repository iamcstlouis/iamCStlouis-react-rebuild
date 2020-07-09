import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const TurqBtn = ({ btnLink, AOSAnimation, AOSDelay, btnText }) => {
    return (
        <div className='turq-btn-wrapper' data-aos={AOSAnimation} data-aos-delay={AOSDelay}>
            <div className='btn'>
                <Link to={btnLink}>{btnText}</Link>
            </div>
        </div>
    )
}

export default TurqBtn
