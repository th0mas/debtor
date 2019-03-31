import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import styles from './styles.scss'
import Profile from '../Profile'
import RecentActivity from '../RecentActivity'
import Login from '../Login'
import Debt from '../Debt'
import Splash from '../Splash'
import PoolDetail from '../PoolDetail'
import CreatePool from '../CreatePool'

export const Base = ({ currentUser, foregroundOpen }) => {
  let globalStyles = [styles.contentHolder, foregroundOpen ? styles.blur : '']
  const loggedInRoutes = currentUser
    ?
    <Switch>
      {/* Should probaly do some kind of JOIN here */}
      <Route path='/recent' render={() => <RecentActivity user={ {id: currentUser}} />} />
      <Route path='/debt/:creditor(\d+)/:debtor(\d+)' exact component={Debt} />
      <Route path='/debt/:id' component={Debt} />
      <Route path='/user/:uuid(\d+)' component={Profile} />
      <Route path='/pool/:id(\d+)' component={PoolDetail}/>
      <Route path='/pool/new/' component={CreatePool} />
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