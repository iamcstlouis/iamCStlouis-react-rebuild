import React from 'react'
import './styles.scss'

const TopSocials = () => {
    return (
        <div className='top-socials' data-aos='fade-in'>
            <div className='links-wrapper'>
                <a href='https://twitter.com/iamcstlouis' target='blank'><i
                    className='fab fa-twitter-square'></i></a>
                <a href='https://www.facebook.com/iamCStlouis' target='blank'><i
                    className='fab fa-facebook-square'></i></a>
                <a href='https://www.instagram.com/iamcstlouis/' target='blank'><i
                    className='fab fa-instagram'></i></a>
            </div>
        </div>
    )
}

export default TopSocials
