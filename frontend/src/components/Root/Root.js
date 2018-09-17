import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import BaseLayout from '../BaseLayoutProvider'
import AppBar from '../AppBar'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(255, 102, 102, 1)'
    },
    secondary: {
      main: 'rgba(112, 174, 110, 1)'
    }
  }
})

const Root = ({ store }) => {
  const history = createBrowserHistory()
  const currentUser = store.getState().entities.currentUser
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <AppBar />
          <BaseLayout currentUser={currentUser}/>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object
}

export default Root