import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const SingleImage = ({ largeImage, dataTitle, imagePreview, alt, overlayHdr, overlaySub }) => {
    return (
        <React.Fragment>
            <Link to={largeImage} data-lightbox='lightbox-img'
                data-title={dataTitle}
            >
                <div className='img-box'>
                    <img src={imagePreview}
                        alt={alt} />
                    <div className='box-overlay'>
                        <p className='box-overlay-hdr'>{overlayHdr}</p>
                        <p className='box-overlay-sub'>{overlaySub}</p>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default SingleImage
