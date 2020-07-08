import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | About</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default About
