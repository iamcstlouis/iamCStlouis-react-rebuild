import React from 'react'
// import PageTitle from '../../../components/PageTitle'
import { Switch, Route } from 'react-router-dom'
import SheetMusicGallery from './SheetMusicGallery'
// import CanvasGallery from './CanvasGallery'
// import CommissionedGallery from './CommissionedGallery'

const MainContent = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/portfolio' component={SheetMusicGallery} />
                {/* <Route path='/portfolio/canvas-paintings' component={CanvasGallery} />
                <Route path='/portfolio/commissioned-paintings' component={CommissionedGallery} /> */}
            </Switch>
        </React.Fragment>
    )
}

export default MainContent
