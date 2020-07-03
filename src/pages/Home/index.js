import React from 'react'
import Hero from './Hero'
import PageTitle from '../../components/PageTitle'

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <PageTitle title={'What I Do'} />
        </React.Fragment>
    )
}

export default Home
