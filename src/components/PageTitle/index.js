import React from 'react'

import './styles.scss'

const PageHeader = ({ AOSDelay, title }) => {
    return (
        <React.Fragment>
            <h1 className='page-header' data-aos='fade-up' data-aos-delay={AOSDelay}>{title}</h1>
        </React.Fragment>
    )
}

export default PageHeader
