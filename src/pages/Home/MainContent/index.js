import React from 'react'
import Hero from '../MainContent/Hero'
import PageTitle from '../../../components/PageTitle'
import MainCopy from '../MainContent/MainCopy'
import TurqBtn from '../../../components/TurqBtn'

const MainContent = () => {
    return (
        <React.Fragment>
            <Hero />
            <PageTitle title={'What I Do'} />
            <MainCopy />

            <TurqBtn btnLink={'/contact'} btnText={'Contact'} />
        </React.Fragment>
    )
}

export default MainContent
