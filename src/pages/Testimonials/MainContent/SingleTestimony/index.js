import React from 'react'

import './styles.scss'

const SingleTestimony = ({ img, alt, testimonialQuote, testimonyFrom, excerpt }) => {
    return (
        <div className='single-testimony'>
            <img src={img}
                alt={alt} className='single-testimony__img' />

            <div className='single-testimony__txt-box'>
                <p className='single-testimony__quote'>
                    {testimonialQuote}
                </p>

                <span className='single-testimony__testimony-from'>{testimonyFrom} </span>
                <p className='single-testimony__excerpt'>
                    - {excerpt}
                </p>
            </div>
        </div>
    )
}

export default SingleTestimony
