import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from '../Contact/MainContent'

const Contact = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Contact</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default Contact
