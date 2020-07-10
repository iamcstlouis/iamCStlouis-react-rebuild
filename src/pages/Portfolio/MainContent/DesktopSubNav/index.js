import React from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './styles.scss'

const DesktopSubnav = () => {

    return (
        <CSSTransition timeout={100} in={true} appear>
            {(status) => (
                <div className={`desktop-subnav`}>
                    <ul className={`desktop-subnav__list subnav-${status}`}>
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
        </CSSTransition>
    )
}

export default DesktopSubnav
