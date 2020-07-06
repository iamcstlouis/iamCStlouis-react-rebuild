import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import Dropdown from './Dropdown'

import './styles.scss'
import Logo from '../../../images/global/cs-logo.png'

const Navigation = () => {
    const [Open, setOpen] = useState(false);
    const [DdOpen, setDdOpen] = useState(false);

    return (
        <div className='navigation'>
            <div className='logo-wrapper'>
                <div className='logo'>
                    <Link to='/'
                        onClick={() => { setOpen(Open ? !Open : Open) }}
                    >
                        <img
                            src={Logo}
                            className={`logo ${Open ? 'open' : ''}`}
                            alt='iamCStlouis Logo'
                        />
                    </Link>
                </div>
            </div>

            <div className={`menu-toggler`} onClick={() => { setOpen(!Open) }}>
                <div className='hamburger-btn'>
                    <div className={`bar bar__top ${Open ? 'open' : ''}`}></div>
                    <div className={`bar bar__mid ${Open ? 'open' : ''}`}></div>
                    <div className={`bar bar__btm ${Open ? 'open' : ''}`}></div>
                </div>
            </div>

            <div id='mobile-menu' className={`mobile-menu ${Open ? 'open' : ''}`}>
                <div className='mobile-menu-links'>
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/'
                                            onClick={() => { setOpen(!Open) }}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/portfolio'
                                            onClick={() => { setOpen(!Open) }}
                                        >
                                            Portfolio
                                            <i className="fas fa-angle-down"></i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/about'
                                            onClick={() => { setOpen(!Open) }}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/testimonials'
                                            onClick={() => { setOpen(!Open) }}
                                        >
                                            Testimonials
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a href='https://iamcstlouis.bigcartel.com'
                                            onClick={() => { setOpen(!Open) }}
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
                                            onClick={() => { setOpen(!Open) }}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className='socials'>
                                    <a href='https://twitter.com/iamcstlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'
                                        onClick={() => { setOpen(!Open) }}
                                    ></i></a>
                                    <a href='https://www.facebook.com/iamCStlouis' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook'
                                        onClick={() => { setOpen(!Open) }}
                                    ></i></a>
                                    <a href='https://www.instagram.com/iamcstlouis/' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'
                                        onClick={() => { setOpen(!Open) }}
                                    ></i></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div id='desktop-menu-wrapper' className='desktop-menu-wrapper'>
                <Container>
                    <Row>
                        <Col>
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
                                    <li className='desktop-menu__list-item portfolio-list-item'>
                                        <NavLink
                                            exact
                                            to='/portfolio'
                                            className='desktop-menu__link'
                                            onMouseOver={() => { setDdOpen(!DdOpen) }}
                                            onMouseLeave={() => { setDdOpen(DdOpen) }}
                                        >
                                            Portfolio
                                             <i className="fas fa-angle-down"></i>
                                        </NavLink>

                                        {DdOpen && <Dropdown />}
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            exact
                                            to='/about'
                                            className='desktop-menu__link'
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='desktop-menu__list-item'>
                                        <NavLink
                                            exact
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
                                            exact
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
