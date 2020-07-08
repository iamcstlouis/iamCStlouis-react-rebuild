import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../Profile'
import TopSocials from '../TopSocials'

import './styles.scss'
import ContactInfo from '../ContactInfo'

const ProfileAndContactInfo = () => {

    const location = useLocation();
    const pathname = location.pathname;
    let whatToShow = null;

    // ------------ | Sets breakpoint and window resize | ------------ 
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1024;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <React.Fragment>
            {
                pathname === '/' ? whatToShow = <Profile />
                    : pathname === '/contact' ? whatToShow = <ContactInfo />
                        : whatToShow
            }

            {width >= breakpoint && <TopSocials />}
        </React.Fragment>
    )
}

export default ProfileAndContactInfo
