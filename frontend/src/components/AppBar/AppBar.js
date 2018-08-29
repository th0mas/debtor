import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import styles from './styles.scss'

const AppBar = () => {
    return (
      <div>
        <MuiAppBar position="absolute">
          <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
            <Typography variant='title' color='inherit' className={styles.title}> 
              debtor
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </div>
    )
}

export default AppBar