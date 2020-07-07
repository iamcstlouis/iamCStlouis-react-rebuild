import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import SheetMusicGallery from './SheetMusicGallery'
import CanvasGallery from './CanvasGallery'
import CommissionedGallery from './CommissionedGallery'

import '../MainContent/styles.scss'

const MainContent = () => {
    return (
        <React.Fragment>
            <Route exact path='/portfolio' render={() => <Redirect to='/portfolio/sheetMusic-paintings' />} />
            <Route path='/portfolio/sheetMusic-paintings' component={SheetMusicGallery} />
            <Route path='/portfolio/canvas-paintings' component={CanvasGallery} />
            <Route path='/portfolio/commissioned-paintings' component={CommissionedGallery} />
        </React.Fragment>
    )
}

export default MainContent
