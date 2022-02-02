import React from 'react'
import '../../global'
import Routes from '../../routes'

const MainSection = () => {
    let isAuthenticated = false
    return (
        <div className='container tasks-wrapper'>
            <div className="view-task">

                <Routes isAuthenticated={isAuthenticated}/>

            </div>
        </div>
    )
}
export default MainSection
