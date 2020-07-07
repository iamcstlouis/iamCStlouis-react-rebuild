import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import Dropdown from './Dropdown'

import './styles.scss'
import Logo from '../../../images/global/cs-logo.png'

const Navigation = () => {
    const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [DesktopDdOpen, setDesktopDdOpen] = useState(false);

    return (
        <div className='navigation'>
            <div className='logo-wrapper'>
                <div className='logo'>
                    <Link to='/'
                        onClick={() => { setMobileMenuOpen(MobileMenuOpen ? !MobileMenuOpen : MobileMenuOpen) }}
                    >
                        <img
                            src={Logo}
                            className={`logo ${MobileMenuOpen ? 'open' : ''}`}
                            alt='iamCStlouis Logo'
                        />
                    </Link>
                </div>
            </div>

            <div className={`menu-toggler`} onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}>
                <div className='hamburger-btn'>
                    <div className={`bar bar__top ${MobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar bar__mid ${MobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar bar__btm ${MobileMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>

            <div id='mobile-menu-wrapper' className={`mobile-menu-wrapper ${MobileMenuOpen ? 'open' : ''}`}>
                <Container>
                    <Row>
                        <Col>

                            {/*  ------------ | Mobile Menu | ------------ */}
                            <div className='mobile-menu'>
                                <ul className='mobile-menu__list'>
                                    <li className='mobile-menu__list-item'>
                                        <NavLink
                                            exact
                                            to='/'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='mobile-menu__list-item mobile-menu__list-item--portfolio'>
                                        <NavLink
                                            to='/portfolio'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                        >
                                            Portfolio
                                        </NavLink>
                                    </li>
                                    <li className='mobile-menu__list-item'>
                                        <NavLink
                                            to='/about'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='mobile-menu__list-item'>
                                        <NavLink
                                            to='/testimonials'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                        >
                                            Testimonials
                                        </NavLink>
                                    </li>
                                    <li className='mobile-menu__list-item'>
                                        <a href='https://iamcstlouis.bigcartel.com'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li className='mobile-menu__list-item'>
                                        <NavLink
                                            to='contact'
                                            className='mobile-menu__link'
                                            onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className='socials'>
                                    <a href='https://twitter.com/iamcstlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'
                                        onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                    ></i></a>
                                    <a href='https://www.facebook.com/iamCStlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook'
                                        onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                    ></i></a>
                                    <a href='https://www.instagram.com/iamcstlouis/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'
                                        onClick={() => { setMobileMenuOpen(!MobileMenuOpen) }}
                                    ></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id='desktop-menu-wrapper' className='desktop-menu-wrapper'>
                <Container>
                    <Row>
                        <Col>

                            {/*  ------------ | Desktop Menu | ------------ */}
                            <div className='desktop-menu'>
                                <ul className='desktop-menu__list'>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            exact
                                            to='/'
                                            className='desktop-menu__link'
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='desktop-menu__list-item desktop-menu__list-item--portfolio'>
                                        <NavLink
                                            to='/portfolio'
                                            className='desktop-menu__link'
                                            onMouseOver={() => { setDesktopDdOpen(!DesktopDdOpen) }}
                                            onMouseLeave={() => { setDesktopDdOpen(DesktopDdOpen) }}
                                        >
                                            Portfolio
                                             <i className="fas fa-angle-down"></i>
                                        </NavLink>

                                        {DesktopDdOpen && <Dropdown />}
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            to='/about'
                                            className='desktop-menu__link'
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            to='/testimonials'
                                            className='desktop-menu__link'
                                        >
                                            Testimonials
                                        </NavLink>
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <a href='https://iamcstlouis.bigcartel.com'
                                            target='_blank'
                                            rel="noopener noreferrer"

                                            className='desktop-menu__link'
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            to='contact'
                                            className='desktop-menu__link'
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Navigation
