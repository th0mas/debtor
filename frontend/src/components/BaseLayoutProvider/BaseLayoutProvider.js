import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import styles from './styles.scss'

import Profile from '../Profile'
import RecentActivity from '../RecentActivity'
import Login from '../Login'
import Debt from '../Debt'
import Splash from '../Splash'
export const Base = ({ currentUser }) => {
  // This originally did more, and will probaly hold any additional routes
  // or pages the app needs.

  const loggedInRoutes = currentUser
    ?
    <React.Fragment>
      <Route path='/recent' render={() => <RecentActivity user={currentUser} />} />
      <Route path='/debt/:creditor(\d+)/:debtor(\d+)' component={Debt} />
      <Route path='/debt/:id' component={Debt} />
      <Route path='/user/:uuid(\d+)' component={Profile} />
    </React.Fragment>
    : <Route path='/' render={() => <Redirect to='/' />} />
  return (
    <div>
      <div className={[styles.contentHolder]}>
        <Switch>
          <Route exact path='/' render={() => {
            return currentUser ? <Redirect to='/recent' push /> : <Splash />
          }} />
          <Route path='/login' component={Login} />
          {loggedInRoutes}
        </Switch>

      </div>
    </div>
  )
}