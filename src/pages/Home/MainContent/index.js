import React from 'react'
import Hero from '../MainContent/Hero'
import PageTitle from '../../../components/PageTitle'
import MainCopy from '../MainContent/MainCopy'
import TurqBtn from '../../../components/TurqBtn'

const MainContent = () => {
    return (
        <React.Fragment>
            <Hero />
            <PageTitle title={'What I Do'} AOSDelay={300} />
            <MainCopy />

            <TurqBtn btnLink={'/contact'} AOSAnimation={'fade-up'} AOSDelay={'300'} btnText={'Contact'} />
        </React.Fragment>
    )
}

export default MainContent
