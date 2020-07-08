import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

const SubNav = () => {

    return (
        <div className="portfolio-subnav">
            <ul className="portfolio-subnav__list">
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/sheetMusic-paintings' className="portfolio-subnav__link" data-aos='fade-up' data-aos-delay='30' data-aos-duration='2000'>Sheet Music</NavLink>
                </li>
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/canvas-paintings' className="portfolio-subnav__link" data-aos='fade-up' data-aos-delay='60' data-aos-duration='2400'>Canvas</NavLink>
                </li>
                <li className="portfolio-subnav__list-item">
                    <NavLink to='/portfolio/commissioned-paintings' className="portfolio-subnav__link" data-aos='fade-up' data-aos-delay='90' data-aos-duration='2800'>Commissioned</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SubNav