import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './styles.scss'

import UserProfile from '../UserProfile'

export const Base = () => {
  // This originally did more, and will probaly hold any additional routes
  // or pages the app needs.
  return (
  <div>
      <div className={ [styles.contentHolder] }>
        <Switch>
          <Route path='/user/:uuid' component={UserProfile}/>
        </Switch>
    </div>
  </div>
  )
}