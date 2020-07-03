import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../../images/global/cs-logo.png'

import './styles.scss'

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col>
                        <div className='logo-wrapper'>
                            <Link to='/'>
                                <img src={Logo} alt='iamCStlouis Logo' />
                            </Link>
                        </div>

                        <div className='contatc-info'>
                            <p>iamcstlouis@gmail.com</p>
                            <p>copyright {getYear()} &copy;. iamcstlouis.com. All rights reserved.</p>
                        </div>

                        <div className='footer-socials'>
                            <a href='https://twitter.com/iamcstlouis' target='blank'><i className='fab fa-twitter-square'></i></a>
                            <a href='https://www.facebook.com/iamCStlouis' target='blank'><i
                                className='fab fa-facebook-square'></i></a>
                            <a href='https://www.instagram.com/iamcstlouis/' target='blank'><i className='fab fa-instagram'></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
