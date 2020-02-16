import React from 'react'

import { Grid } from "@material-ui/core"

import { IMG_URL } from '../../api/constants'
import Rating from '../../components/Rating/Rating'

import './MovieContent.scss'

const MovieContent = props => {

  const parseRate = () => {
    if (props.detail.vote_average > 0 && props.detail.vote_average <= 2) {
      return 1;
    } else if (props.detail.vote_average > 2 && props.detail.vote_average <= 4) {
      return 2;
    } else if (props.detail.vote_average > 4 && props.detail.vote_average <= 6) {
      return 3;
    } else if (props.detail.vote_average > 6 && props.detail.vote_average <= 8) {
      return 4;
    } else {
      return 5;
    }
  }

  return (
    <div>
      <Grid container>
        <Grid container>
          <Grid item xs={6}>
            <img src={`${IMG_URL}${props.detail.backdrop_path}`} />
          </Grid>
          <Grid item xs={6}>
            <Rating rate={parseRate()} disabled />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className="content-container">
            <div className="title">Title:</div>
            <div className="content">{props.detail.title}</div>
          </div>
          <div className="content-container">
            <div className="title">Release date:</div>
            <div className="content">{props.detail.release_date}</div>
          </div>
          <div className="content-container">
            <div className="title">Original language:</div>
            <div className="content">{props.detail.original_language}</div>
          </div>
          <div className="content-container">
            <div className="title">Budget:</div>
            <div className="content">{props.detail.budget}</div>
          </div>
          <div className="content-container">
            <div className="title">Genres:</div>
            <div className="map-content">{props.detail.genres.map((genre, index) => 
              <div key={index}>{`${genre.name}${index === props.detail.genres.length - 1 ? '.' : ","}`}</div>
            )}</div>
          </div>
          <div className="overview-container">
            <div className="overview-title">Overview:</div>
            <div className="overview-content">{props.detail.overview}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieContent