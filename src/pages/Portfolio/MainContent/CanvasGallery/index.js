import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const CanvasGallery = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Portfolio - Canvas Paintings</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default CanvasGallery
