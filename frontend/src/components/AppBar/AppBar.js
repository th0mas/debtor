import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import UserAvatar from '../UserAvatar'

import SearchBar from '../SearchBar'
//import Button from '@material-ui/core/Button'

import styles from './styles.scss'

const getUserById = (userId, users) => {
  return users.find(user => user.id === userId)
}

const AppBar = ({ currentUser, users }) => {
  const loggedInBar = () => {
    return (
      <React.Fragment>
        <SearchBar />
        <div className={styles.grow} />
        <UserAvatar user={getUserById(currentUser, users)} />
      </React.Fragment>
    )
  }
  return (
    <div>
      <MuiAppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='primary' className={styles.title}>
            <Link to='/'>debtor</Link>
          </Typography>
          {users.length > 0 && currentUser ? loggedInBar() : null}
        </Toolbar>
      </MuiAppBar>
    </div>
  )
}

export default AppBar