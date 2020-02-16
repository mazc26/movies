import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { BASE_URL, API_KEY } from '../../api/constants'
import MovieContent from '../MovieContent/MovieContent'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './ContentModal.scss'

const AlertDialog = props => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`${BASE_URL}movie/${props.movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setDetail(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [props.movieId])

  return (
    <div>
      <Fab onClick={handleClickOpen} size={"small"} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{detail.title}</DialogTitle>
        <DialogContent>
          <MovieContent detail={detail}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog