import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import BaseLayout from '../BaseLayoutProvider'
import AppBar from '../AppBar'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5722'
    },
    secondary: {
      main: 'rgba(112, 174, 110, 1)'
    }
  }
})

const buildID = process.env.COMMIT_REF /* eslint no-undef: off */

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <AppBar />
          <BaseLayout />
          <p style={{color: 'grey', fontStyle: 'italic', fontSize: '0.5rem'}}>BUILD ID: {buildID}</p>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object
}

export default Root