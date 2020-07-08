import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const CommissionedGallery = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Portfolio - Commissioned Paintings</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default CommissionedGallery
