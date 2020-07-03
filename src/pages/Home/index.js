import React from 'react'
import Hero from './Hero'
import PageTitle from '../../components/PageTitle'
import MainCopy from './MainCopy'

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <PageTitle title={'What I Do'} />
            <MainCopy />
        </React.Fragment>
    )
}

export default Home
