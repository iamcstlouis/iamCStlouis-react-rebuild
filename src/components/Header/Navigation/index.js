import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

import './styles.scss'
import Logo from '../../../images/global/cs-logo.png'

const Navigation = () => {
    const [menuOpen, setMenuState] = useState(false);

    return (
        <div className='navigation'>
            <div className='logo-wrapper'>
                <div className='logo'>
                    <Link to='/'
                        onClick={() => { setMenuState(!menuOpen) }}
                    >
                        <img
                            src={Logo}
                            className={`logo ${menuOpen ? 'open' : ''}`}
                            alt='iamCStlouis Logo'
                        />
                    </Link>
                </div>
            </div>

            <div className={`menu-toggler`} onClick={() => { setMenuState(!menuOpen) }}>
                <div className='hamburger-btn'>
                    <div className={`bar bar__top ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar bar__mid ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar bar__btm ${menuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
            
            <div id='mobile-menu' className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className='mobile-menu-links'>
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/portfolio'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                        >
                                            Portfolio
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/about'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/testimonials'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                        >
                                            Testimonials
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a href='https://iamcstlouis.bigcartel.com'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='contact'
                                            onClick={() => { setMenuState(!menuOpen) }}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className='socials'>
                                    <a href='https://twitter.com/iamcstlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'
                                        onClick={() => { setMenuState(!menuOpen) }}
                                    ></i></a>
                                    <a href='https://www.facebook.com/iamCStlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook'
                                        onClick={() => { setMenuState(!menuOpen) }}
                                    ></i></a>
                                    <a href='https://www.instagram.com/iamcstlouis/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'
                                        onClick={() => { setMenuState(!menuOpen) }}
                                    ></i></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div id='desktop-menu' className='desktop-menu'>
                <div className='desktop-menu-links'>
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/'
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/portfolio'
                                        >
                                            Portfolio
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/about'
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/testimonials'
                                        >
                                            Testimonials
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a href='https://iamcstlouis.bigcartel.com'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        >
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='contact'
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Navigation
