import React from 'react'
import TopQuote from '../../../../../components/TopQuote'
import PageTitle from '../../../../../components/PageTitle'
import SingleImage from '../../SingleImage'

import CanvasData from '../../CanvasGallery/MainContent/CanvasData'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Canvas Paintings'} />
            <TopQuote />

            <div className='gallery-section'>
                {
                    CanvasData.map((item) => {
                        return (
                            <SingleImage largeImage={item.largeImage} dataTitle={item.dataTitle} imagePreview={item.imagePreview} alt={item.alt} overlayHdr={item.overlayHdr} overlaySub={item.overlaySub} key={item.id} />
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default MainContent
