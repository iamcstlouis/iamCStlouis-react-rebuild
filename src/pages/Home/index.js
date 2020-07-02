import React from 'react'
import Profile from './Profile'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <Profile />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
