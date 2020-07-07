import React, { useState, useEffect } from 'react'
import Profile from '../Profile'
import TopSocials from '../TopSocials'

import './styles.scss'
import ContactInfo from '../ContactInfo'

const ProfileAndContactInfo = () => {
    const pathname = window.location.pathname

    // const [isHomepage, setProfile] = useState(pathname === '/')
    // const [isContactPage, setContactInfo] = useState(pathname === '/contact')

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1024;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <React.Fragment>

            {pathname === '/' ? <Profile /> : pathname === '/contact' ? <ContactInfo /> : null}

            {width >= breakpoint && <TopSocials />}
        </React.Fragment>
    )
}

export default ProfileAndContactInfo
