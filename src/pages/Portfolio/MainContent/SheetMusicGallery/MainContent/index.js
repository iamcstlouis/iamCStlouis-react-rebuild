import React from 'react'
import SingleImage from '../../SingleImage'
import PageTitle from '../../../../../components/PageTitle'
import TopQuote from '../../../../../components/TopQuote'

import SheetMusicData from './SheetMusicData'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title='Sheet Music Paintings' AOSDelay={'100'} />
            <TopQuote />
            <div className='gallery-section'>
                {
                    SheetMusicData.map((item) => {
                        return (
                            <SingleImage image={item.image} alt={item.alt} overlayHdr={item.overlayHdr} overlaySub={item.overlaySub} key={item.id} />
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default MainContent