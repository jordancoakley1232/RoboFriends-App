import React from 'react'

const searchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input type="search" placeholder="Search Robots" className="pa3 ba b--green bg-light-blue" onChange={searchChange} />
        </div>
    )
}

export default searchBox