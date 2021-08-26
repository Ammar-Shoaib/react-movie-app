import React from 'react'

const Search = ({handleChange, search}) => {
    return (
        <div className='searchbox-wrap'>
            <input 
                type="text" 
                name=""
                className="searchbar"
                onChange={handleChange}
                onKeyPress={search}
                placeholder="Search Movies..."
            />
        </div>
    )
}

export default Search