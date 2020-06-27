import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Container >
                <Row>
                    <Col xs={2} style={{ border: 'solid red 2px' }}>
                        <h1>Hellloooooooooo</h1>
                    </Col>
                </Row>

            </Container>
        </header>
    )
}

export default Header
