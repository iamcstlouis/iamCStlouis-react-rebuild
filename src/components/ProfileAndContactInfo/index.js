import React from 'react'
import Profile from '../Profile'
import TopSocials from '../TopSocials'

import './styles.scss'
import ContactInfo from '../ContactInfo'

const ProfileAndContactInfo = () => {
    const pathname = window.location.pathname

    return (
        <React.Fragment>

            {pathname === '/' ? <Profile /> : pathname === '/contact' ? <ContactInfo /> : ''}

            <TopSocials />
        </React.Fragment>
    )
}

export default ProfileAndContactInfo
