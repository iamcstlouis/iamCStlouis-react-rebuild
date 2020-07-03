import React from 'react'

import './styles.scss'

const SingleTestimony = ({ img, alt, testimonialQuote, testimonyFrom, excerpt }) => {
    return (
        <div className='single-testimony'>
            <img src={img}
                alt={alt} />

            <div className='testimonial-txt-box'>
                <p className='testimonial-quote'>
                    {testimonialQuote}
                </p>

                <span>{testimonyFrom} </span>
                <p className='testimonial-sub'>
                    - {excerpt}
                </p>
            </div>
        </div>
    )
}

export default SingleTestimony
