import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const SubNav = () => {

    return (
        <div className="portfolio-subnav">
            <ul className="portfolio-subnav__list">
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/sheetMusic-paintings' className="portfolio-subnav__link">Sheet Music</NavLink>
                </li>
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/canvas-paintings' className="portfolio-subnav__link">Canvas</NavLink>
                </li>
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/commissioned-paintings' className="portfolio-subnav__link">Commissioned</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SubNav