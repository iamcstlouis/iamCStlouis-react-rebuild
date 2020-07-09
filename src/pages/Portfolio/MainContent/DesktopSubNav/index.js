import React from 'react'
import { NavLink } from 'react-router-dom'
import { Transition } from 'react-transition-group'

import './styles.scss'

const DesktopSubnav = () => {

    return (
        <Transition timeout={100} in={true} appear>
            {(status) => (
                <div className={`desktop-subnav subnav-${status}`}>
                    <ul className='desktop-subnav__list'>
                        <li className='desktop-subnav__list-item'>
                            <NavLink to='/portfolio/sheetMusic-paintings'
                                className='desktop-subnav__link'
                            >
                                Sheet Music
                            </NavLink>
                        </li>

                        <li className='desktop-subnav__list-item'>
                            <NavLink to='/portfolio/canvas-paintings'
                                className='desktop-subnav__link'
                            >
                                Canvas
                            </NavLink>
                        </li>

                        <li className='desktop-subnav__list-item'>
                            <NavLink to='/portfolio/commissioned-paintings'
                                className='desktop-subnav__link'
                            >
                                Commissioned
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </Transition>
    )
}

export default DesktopSubnav
