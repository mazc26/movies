import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

import MainLogo from '../../assets/MainLogo.png'

import './AppBar.scss'

export default function MenuAppBar() {

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: "#1976d2"}}>
        <Toolbar className="space-between">
          <img className="main-logo" src={MainLogo} alt={MainLogo} />
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}