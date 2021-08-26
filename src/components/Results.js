import React from 'react'
import Result from './Result'

const Results = ({results, openPopup}) => {
    return (
        <div className='results'>
            {results.map(result => <Result key={result.imdbID} {...result} openPopup={openPopup} />)}
        </div>
    )
}

export default Results
