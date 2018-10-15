import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import styles from './styles.scss'
import Profile from '../Profile'
import RecentActivity from '../RecentActivity'
import Login from '../Login'
import Debt from '../Debt'
import Splash from '../Splash'
export const Base = ({ currentUser, foregroundOpen }) => {
  let globalStyles = [styles.contentHolder, foregroundOpen ? styles.blur : '']

  const loggedInRoutes = currentUser
    ?
    <Switch>
      <Route path='/recent' render={() => <RecentActivity user={currentUser} />} />
      <Route path='/debt/:creditor(\d+)/:debtor(\d+)' exact component={Debt} />
      <Route path='/debt/:id' component={Debt} />
      <Route path='/user/:uuid(\d+)' component={Profile} />
    </Switch>
    : <Route path='/' render={() => <Redirect to='/' />} />

  return (
    <div>
      <div className={globalStyles.join(' ')}>
        <Switch>
          <Route exact path='/' render={() => {
            return currentUser ? <Redirect to='/recent' push /> : <Splash />
          }} />
          <Route path='/login' render={() => currentUser ? <Redirect to='/recent' push /> : <Login />} />
          {loggedInRoutes}
        </Switch>

      </div>
    </div>
  )
}