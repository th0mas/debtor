import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Input from '@material-ui/core/Input'
import Popover from '@material-ui/core/Popover'

import styles from './styles.scss'
export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state= {anchor: null}
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
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder='Search...'
          disableUnderline
          onFocus={this.handleFocus}
          onBlur={this.handleLoss}
        />

      </div>
    )
  }
}