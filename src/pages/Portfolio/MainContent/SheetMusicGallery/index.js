import React from 'react'
import { Helmet } from 'react-helmet'
import MainContent from './MainContent'

const SheetMusicGallery = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>iamCStlouis | Portfolio - Sheet Music Paintings</title>
            </Helmet>

            <MainContent />
        </React.Fragment>
    )
}

export default SheetMusicGallery
