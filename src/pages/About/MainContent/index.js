import React from 'react'
import PageTitle from '../../../components/PageTitle'
import TopQuote from '../../../components/TopQuote'
import Hero from './Hero'
import MainCopy from './MainCopy'

import './styles.scss'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title={'About Me'} AOSDelay={'100'} />
            <TopQuote />

            <div className='content-wrapper'>
                <Hero />
                <MainCopy />
            </div>
        </React.Fragment>
    )
}

export default MainContent
