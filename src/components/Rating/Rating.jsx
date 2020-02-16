import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const SimpleRating = props => {
  const [value, setValue] = React.useState(0)

  const filterByRate = rate => {
    const data = props.dataToFilter
    let filtered = []

    if (rate === 1) {
      filtered = data.filter(element => element.vote_average <= 2)
    } else if (rate === 2) {
      filtered = data.filter(element => element.vote_average <= 4 && element.vote_average > 2)
    } else if (rate === 3) {
        filtered = data.filter(element => element.vote_average <= 6 && element.vote_average > 4)
    } else if (rate === 4) {
      filtered = data.filter(element => element.vote_average <= 8 && element.vote_average > 6)
    } else if (rate === 5) {
      filtered = data.filter(element => element.vote_average <= 10 && element.vote_average > 8)
    } else {
      filtered = []
    }

    props.handleChange(filtered, rate)
  }

  return (
    <div>
      <Box component="fieldset" mb={1} borderColor="transparent">
        <Typography component="legend">Rating filter</Typography>
        <Rating
          disabled={props.disabled}
          name="simple-controlled"
          value={value || props.rate}
          onChange={(event, newValue) => {
            filterByRate(newValue)
            setValue(newValue)
          }}
        />
      </Box>
    </div>
  )
}

export default SimpleRating