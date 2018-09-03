import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './styles.scss'

import Profile from '../Profile'
import RecentActivity from '../RecentActivity'
import Login from '../Login'
export const Base = () => {
  // This originally did more, and will probaly hold any additional routes
  // or pages the app needs.
  return (
    <div>
      <div className={[styles.contentHolder]}>
        <Switch>
          <Route exact path='/' component={RecentActivity} />
          <Route path='/login' component={Login} />
          <Route path='/user/:uuid' component={Profile} />
        </Switch>
      </div>
    </div>
  )
}