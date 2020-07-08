import React from 'react'
import PageTitle from '../../../../../components/PageTitle'
import TopQuote from '../../../../../components/TopQuote'
import SingleImage from '../../SingleImage'

import CommissionedData from './CommissionedData'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Commissioned Paintings'} AOSDelay={'100'} />
            <TopQuote />

            <div className='gallery-section'>
                {
                    CommissionedData.map((item) => {
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
