import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styles from './styles.scss'

import Profile from '../Profile'
import RecentActivity from '../RecentActivity'
import Login from '../Login'
import Debt from '../Debt'
export const Base = ({currentUser}) => {
  // This originally did more, and will probaly hold any additional routes
  // or pages the app needs.
  return (
    <div>
      <div className={[styles.contentHolder]}>
        <Switch>
          <Route exact path='/' render={() => <RecentActivity user={currentUser}/>} />
          <Route path='/login' component={Login} />
          <Route path='/debt/' component={Debt} />
          <Route path='/debt/:id' component={Debt} />
          <Route path='/user/:uuid(\d+)' component={Profile} />
        </Switch>
      </div>
    </div>
  )
}