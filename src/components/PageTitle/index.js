import React from 'react'

import './styles.scss'

const PageHeader = ({ title }) => {
    return (
        <React.Fragment>
            <h1 className='page-header'>{title}</h1>
        </React.Fragment>
    )
}

export default PageHeader
