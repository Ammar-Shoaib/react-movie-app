import React from 'react'

const Result = ({Title, Poster, imdbID, openPopup}) => {
    return (
        <div className='result' onClick={() => openPopup(imdbID)}>
            <img src={Poster} alt={Title} />
            <h3>{Title}</h3>
        </div>
    )
}

export default Result