import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import styles from './styles.scss'

export const Splash = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Debtor - manage lending money</h1>
      <div className={styles.loginButtonContainer}>
        <Button variant='outlined'><Link to='/login'>Login</Link></Button>
        <p>No account? <span style={{textDecoration: 'underline'}}><Link to='/login/create'>Create one</Link></span></p>
      </div>
    </div>
  )
} 