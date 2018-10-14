import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'

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

  handleLoss = () => {
    this.setState({
      anchor: null
    })
    this.props.setForegroundClosed()
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  render() {
    const anchor = this.state.anchor
    const open = Boolean(anchor)
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
                <h2>{ this.state.searchText }</h2>
              </div>
            </Paper>
          </Popper>
        </div>
      </div>
    )
  }
}