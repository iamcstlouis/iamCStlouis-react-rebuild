import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const Dropdown = ({ DropdownLink }) => {

    return (
        <div className='dropdown'>
            <ul className='dropdown__list'>
                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio'
                        className='dropdown__link'>
                        {DropdownLink}
                            Sheet Music Paintings
                    </NavLink>
                </li>
                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio/canvas-paintings'
                        className='dropdown__link'>
                        {DropdownLink}
                        Canvas Paintings
                    </NavLink>
                </li>

                <li className='dropdown__list-item'>
                    <NavLink to='/portfolio/commissioned-paintings'
                        className='dropdown__link'>
                        {DropdownLink}
                        Commissioned Paintings
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown