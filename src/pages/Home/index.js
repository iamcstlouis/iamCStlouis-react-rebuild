import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Welcome</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default Home
