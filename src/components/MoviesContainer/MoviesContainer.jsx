import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid';

import { BASE_URL, API_KEY } from '../../api/constants'
import Movie from '../Movie/Movie'
import SearchBar from '../SearchBar/SearchBar'

import './MoviesContainer.scss'
import Rating from '../Rating/Rating';

const Movies = props => {
  const [originalMovies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [rate, setRate] = useState(null)
  const [value, setValue] = useState("")

  useEffect(() => {
    fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response=> response.json())
      .then(response => {
        setMovies(response.results)
      })
      .catch(error => console.error(error))
  }, [props.token])

  const handleChange = (filtered, value) => {
    setFilteredMovies(filtered)
    setValue(value)
  }

  const handleRate = (filteredByRate, rate) => {
    setFilteredMovies(filteredByRate)
    setRate(rate)
  }

  const getContent = () => {
    if ((!filteredMovies.length && value.length) || (rate !== null && !filteredMovies.length)) {
      return <div className="error-msg">There are no results to show. Plese try with a different criteria</div>
    }

    if (filteredMovies.length) {
      return (
        filteredMovies.map((movie, index)=> (
          <Grid item lg={2} md={3} key={index}>
            <Movie movieInfo={movie} />
          </Grid>
        ))
      )
    } else if (!filteredMovies.length && rate === null) {
      return (
        originalMovies.map((movie, index)=> (
          <Grid item lg={2} md={3} key={index}>
            <Movie movieInfo={movie} />
          </Grid>
        ))
      )
    }
  }

  return (
    <div>
      <Grid container spacing={2} className="movies-container">
        <Grid container className="searh-container">
          <Grid item xs={6}>
            <SearchBar dataToFilter={originalMovies} handleChange={handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <Rating handleChange={handleRate} dataToFilter={originalMovies}/>
          </Grid>
        </Grid>
        {getContent()}
      </Grid>
    </div>
  )
}

export default Movies