import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from '../Testimonials/MainContent'

const Testimonials = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Portfolio - Testimonials</title>
            </Helmet>
            
            <MainContent />
        </React.Fragment>
    )
}

export default Testimonials
