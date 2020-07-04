import React from 'react'
import SheetMusicdata from './SheetMusicData'
import SingleImage from './SingleImage'

import './styles.scss'

const SheetMusicGallery = () => {
    return (
        <React.Fragment>
            <div className='sheet-music-gallery-section'>
                {
                    SheetMusicdata.map((item) => {
                        return (
                            <SingleImage largeImage={item.largeImage} dataTitle={item.dataTitle} imagePreview={item.imagePreview} alt={item.alt} overlayHdr={item.overlayHdr} overlaySub={item.overlaySub} key={item.id} />
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default SheetMusicGallery
