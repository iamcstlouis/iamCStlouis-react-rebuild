import React from 'react'
import Profile from '../Profile'
import TopSocials from '../TopSocials'

import './styles.scss'
import ContactInfo from '../ContactInfo'

const ProfileAndContactInfo = () => {
    const pathname = window.location.pathname

    // const [isHomepage, setProfile] = useState(pathname === '/')
    // const [isContactPage, setContactInfo] = useState(pathname === '/contact')



    return (
        <React.Fragment>

            {pathname === '/' ? <Profile /> : pathname === '/contact' ? <ContactInfo /> : null}

            <TopSocials />
        </React.Fragment>
    )
}

export default ProfileAndContactInfo
