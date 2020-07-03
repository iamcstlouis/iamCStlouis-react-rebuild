import React from 'react'
import PageTitle from '../../../components/PageTitle'
import TestimonialsData from './TestimonialsData'
import SingleTestimony from './SingleTestimony'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Testimonials'} />
            <section className='testimonies'>
                {
                    TestimonialsData.map((testimony) => (
                        <SingleTestimony img={testimony.img} alt={testimony.alt} testimonialQuote={testimony.testimonialQuote} testimonyFrom={testimony.testimonyFrom} excerpt={testimony.excerpt} key={testimony.id} />
                    ))
                }
            </section>
        </React.Fragment>
    )
}

export default MainContent
