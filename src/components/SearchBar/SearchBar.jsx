import React, { useState } from 'react'

import { Grid } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from '@material-ui/core/TextField'
import IconButton from "@material-ui/core/IconButton"

import './SearchBar.scss'

const SearchBar = props => {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    const data = props.dataToFilter

    const regex = new RegExp(e.target.value, 'i')
    const filtered = data.filter(item=>   
      item.title.search(regex) > -1
    )
  
    setSearch(e.target.value)
    props.handleChange(filtered, e.target.value)
  }

  return (
    <div className="search-bar">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={search}
            id="outlined-full-width"
            fullWidth
            placeholder="Search movies"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchBar