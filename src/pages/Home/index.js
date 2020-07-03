import React from 'react'
import Hero from './Hero'
import PageTitle from '../../components/PageTitle'
import MainCopy from './MainCopy'
import TurqBtn from '../../components/TurqBtn'

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <PageTitle title={'What I Do'} />
            <MainCopy />

            <TurqBtn btnLink={'/contact'} btnText={'Contact'} />
        </React.Fragment>
    )
}

export default Home
