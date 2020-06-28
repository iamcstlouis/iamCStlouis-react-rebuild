import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

import './styles.scss'
import Logo from '../../images/global/cs-logo.png'

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <div className='logo'>
                            <div className='logo-wrapper'>
                                <Link to='/'>
                                    <img
                                        src={Logo}
                                        className='logo'
                                        alt='iamCStlouis Logo'
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className={`menu-toggler`}>
                            <div className='hamburger-btn'>
                                <div className={`bar bar__top}`}></div>
                                <div className={`bar bar__mid}`}></div>
                                <div className={`bar bar__btm}`}></div>
                            </div>
                        </div>

                        <div id='mobile-menu' className={`mobile-menu`}>
                            <div className='mobile-menu-links'>
                                <div className='container'>
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
                                                to='/work'
                                            >
                                                Work
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
                                                to='contact'
                                            >
                                                Contact
                                        </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className='desktop-menu'>
                            <div className='desktop-links'>
                                <ul>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/'>
                                            Home
                                </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/work'>
                                            Work
                                </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='/about'>
                                            About
                                </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            exact
                                            to='contact'>
                                            Contact
                                </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
