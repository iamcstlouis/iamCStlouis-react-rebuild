import React from 'react'

import './styles.scss'

const SingleTestimony = ({ img, alt, testimonialQuote, testimonyFrom, excerpt }) => {
    return (
        <div className='single-testimony'>
            <img src={img}
                alt={alt} className='single-testimony__img' data-aos='fade-up' data-aos-delay='600' />

            <div className='single-testimony__txt-box'>
                <p className='single-testimony__quote' data-aos='fade-up' data-aos-delay='750'>
                    {testimonialQuote}
                </p>

                <span className='single-testimony__testimony-from' data-aos='fade-up' data-aos-delay='850'>{testimonyFrom} </span>
                <p className='single-testimony__excerpt' data-aos='fade-up' data-aos-delay='950'>
                    - {excerpt}
                </p>
            </div>
        </div>
    )
}

export default SingleTestimony
