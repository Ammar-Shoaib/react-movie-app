import React, { useState } from 'react'
import Results from './components/Results'
import Search from './components/Search'
import Popup from './components/Popup'
import axios from 'axios'

const App = () => {

  const apiUrl = "https://www.omdbapi.com/?apikey=3cd796ae"

  const [state, setState] = useState({
    s:"",
    results:[],
    selected:{}
  })

  const handleChange = e => {
    const s = e.target.value
    setState(prevState => {
      return {
        ...prevState,
        s:s
      }
    })
  }

  const search = e => {
    if(e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({data}) => {
        setState(prevState => {
          return {
            ...prevState,
            results:data.Search
          }
        })
      })
    }
  }

  console.log(state.results);
  console.log(state.selected);

  const openPopup = id => {
    axios(apiUrl + "&i=" + id).then(({data}) => {
      setState(prevState => {
        return {
          ...prevState,
          selected:data
        }
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return {
        ...prevState,
        selected:{}
      }
    })
  }

  return (
    <div>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search search={search} handleChange={handleChange} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  )
}

export default App
