import React from 'react'
import { history } from '../../store'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import styles from './styles.scss'

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchor: null, searchText: '' }
  }
  handleFocus = (event) => {
    this.setState({
      anchor: event.currentTarget
    })
    this.props.setForegroundOpen()
  }

  handleLoss = (event) => {
    this.props.setForegroundClosed()
    event.preventDefault()
    this.setState({
      anchor: null,
      searchText: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  handleKey = (event, result) => {
    if (event.keyCode === 13 && result) {
      // Enter has been clicked
      // double check there is actually a result bc spaghetti TODO: Fix
      history.push(`/user/${result.id}`)
      event.target.blur()
    }
  }

  getSearchResults = (query) => {
    const res = query 
      ? this.props.users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()) || user.email.includes(query))
      : []
    return res
  }

  render() {
    const anchor = this.state.anchor
    const open = Boolean(anchor)
    const results = this.getSearchResults(this.state.searchText)
    return (
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <div>
          <Input
            placeholder='Search...'
            disableUnderline
            onFocus={this.handleFocus}
            onBlur={this.handleLoss}
            onChange={this.handleChange}
            onKeyUp={(event) => this.handleKey(event, results[0])}
            value={this.state.searchText}
          />
          <Popper
            id='search-popper'
            open={open}
            onClose={this.handleLoss}
            anchorEl={anchor}
            placement='bottom-start'
            disablePortal
            style={{ width: '100%' }}
          >
            <Paper className={styles.resultsPaper}>
              <div className={styles.resultsHolder}>
                <List>
                  {this.state.searchText.length > 0
                    ? results.map(item => {
                      return (
                        <div key={item.id}>
                          <Divider />
                          <ListItem onMouseDown={() => { history.push(`/user/${item.id}`) }} style={{ cursor: 'pointer' }}>
                            <ListItemText>{item.name}</ListItemText>
                          </ListItem>
                        </div>
                      )
                    })
                    : <p>Start typing to search</p>
                  }
                </List>
              </div>
            </Paper>
          </Popper>
        </div>
      </div>
    )
  }
}