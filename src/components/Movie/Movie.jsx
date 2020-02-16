import React, { useState } from 'react'

import { IMG_URL } from '../../api/constants'
import ContentModal from '../../components/ContentModal/ContentModal'

import classnames from 'classnames'
import './Movie.scss'

const Movie = props => {  
  const [opacity, setOpacity] = useState(false)
    
  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setOpacity(true)} 
      onMouseLeave={() => setOpacity(false)} 
    >
      <div className="picture-container">
      <img
        className={classnames({"opacity": opacity })} 
        src={`${IMG_URL}${props.movieInfo.poster_path}`} alt={`${IMG_URL}${props.movieInfo.poster_path}`} 
      />
      {
        opacity &&  
        <div className="expand-button">
          <ContentModal movieId={props.movieInfo.id} />
        </div>
      }
      </div>
    </div>
  )
}

export default Movie