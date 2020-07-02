import React from 'react'
import './styles.scss'

const Profile = () => {
    return (
        <React.Fragment>
            <div className='profile-and-socials'>
                <div className='profile'>
                    <p className='name'>I AM C ST LOUIS</p>
                    <p className='profession'>Portraiturist / Painter / <span>Artist</span></p>
                </div>

                <div className='socials'>
                    <div className='links-wrapper'>
                        <a href='https://twitter.com/iamcstlouis' target='blank'><i
                            className='fab fa-twitter-square'></i></a>
                        <a href='https://www.facebook.com/iamCStlouis' target='blank'><i
                            className='fab fa-facebook-square'></i></a>
                        <a href='https://www.instagram.com/iamcstlouis/' target='blank'><i
                            className='fab fa-instagram'></i></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile
