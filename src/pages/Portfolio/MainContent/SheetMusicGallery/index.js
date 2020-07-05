import React from 'react'
import TopQuote from '../../../../components/TopQuote'
import SingleImage from '../SingleImage'

import SheetMusicData from './SheetMusicData'

import '../../MainContent/styles.scss'

const SheetMusicGallery = () => {
    return (
        <React.Fragment>
            <TopQuote />
            <div className='gallery-section'>
                {
                    SheetMusicData.map((item) => {
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