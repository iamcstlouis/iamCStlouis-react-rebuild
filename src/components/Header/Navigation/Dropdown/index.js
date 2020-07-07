import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Dropdown = () => {
    const [DdClosed, SetDdClosed] = useState(false);

    function getDisplay() {
        if (!DdClosed) {
            return 'block'
        } else {
            return 'none'
        }
    }

    return (
        <div className='dropdown' style={{ display: getDisplay() }}>
            <ul className='dropdown__list'>
                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio/sheetMusic-paintings'
                        className='dropdown__link'
                        onClick={() => { SetDdClosed(!DdClosed) }}
                    >
                        Sheet Music Paintings
                    </NavLink>
                </li>

                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio/canvas-paintings'
                        className='dropdown__link'
                        onClick={() => { SetDdClosed(!DdClosed) }}>
                        Canvas Paintings
                    </NavLink>
                </li>

                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio/commissioned-paintings'
                        className='dropdown__link'
                        onClick={() => { SetDdClosed(!DdClosed) }}>
                        Commissioned Paintings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown