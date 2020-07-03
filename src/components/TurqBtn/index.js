import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const TurqBtn = ({ btnLink, btnText }) => {
    return (
        <div className='btn-wrapper'>
            <div className='btn btn--contact'>
                <Link to={btnLink}>{btnText}</Link>
            </div>
        </div>
    )
}

export default TurqBtn
