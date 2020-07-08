import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import SheetMusicGallery from './SheetMusicGallery'
import CanvasGallery from './CanvasGallery'
import CommissionedGallery from './CommissionedGallery'

import '../MainContent/styles.scss'
import SubNav from './SubNav'

const MainContent = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1024;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <React.Fragment>
            {width < breakpoint && <SubNav />}

            <Route exact path='/portfolio' render={() => <Redirect to='/portfolio/sheetMusic-paintings' />} />
            <Route path='/portfolio/sheetMusic-paintings' component={SheetMusicGallery} />
            <Route path='/portfolio/canvas-paintings' component={CanvasGallery} />
            <Route path='/portfolio/commissioned-paintings' component={CommissionedGallery} />
        </React.Fragment>
    )
}

export default MainContent
