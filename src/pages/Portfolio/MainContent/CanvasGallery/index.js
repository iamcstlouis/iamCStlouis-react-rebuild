import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const CanvasGallery = () => {
    return (
        <div>
            <Helmet>
                <title>iamCStlouis | Portfolio - Canvas Paintings</title>
            </Helmet>

            <MainContent />
        </div>
    )
}

export default CanvasGallery
