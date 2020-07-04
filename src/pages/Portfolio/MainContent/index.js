import React from 'react'
import PageTitle from '../../../components/PageTitle'
import SheetMusicGallery from './SheetMusicGallery'

const MainContent = () => {
    return (
        <React.Fragment>
            <PageTitle title={'Portfolio'} />
            <SheetMusicGallery />
        </React.Fragment>
    )
}

export default MainContent
