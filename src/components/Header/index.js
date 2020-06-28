import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.scss'

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
