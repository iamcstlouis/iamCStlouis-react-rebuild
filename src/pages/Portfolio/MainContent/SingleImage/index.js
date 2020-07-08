import React from 'react'

import './styles.scss'

const SingleImage = ({ image, alt, overlayHdr, overlaySub }) => {
    return (
        <React.Fragment>
            <div className='single-img' data-aos='fade-up' data-aos-delay='700'>
                <div className='img-box'>
                    <img src={image}
                        alt={alt} />
                    <div className='box-overlay'>
                        <p className='box-overlay-hdr'>{overlayHdr}</p>
                        <p className='box-overlay-sub'>{overlaySub}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SingleImage
