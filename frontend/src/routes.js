import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Base from './components/BaseLayoutProvider'

const Routes = () => {
  return (
    <Switch component>
      <Route path='/' component={Base} />
    </Switch>
  )
}

export default Routes