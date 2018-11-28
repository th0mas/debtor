import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Popover from '@material-ui/core/Popover'
import UserCard from '../UserCard'

import styles from './styles.scss'

export class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchor: null }
  }

  handleClick = (event) => {
    this.setState({
      anchor: event.currentTarget,
    })
  }
  handleClose = () => {
    this.setState({
      anchor: null,
    })
  }
  // For performance reasons, this will be kept alive
  // between pages and then updated with new user details.
  // If we've moved profiles then this would be updated to show the new
  // user's profile popup, which we don't want so we'll gracefully
  // close here
  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.handleClose()
    }
  }

  render() {
    const anchor = this.state.anchor
    const open = Boolean(anchor)
    return (
      <div>
        <Avatar aria-haspopup="true"
          className={styles.avatar}
          onClick={this.handleClick}
          src={this.props.user.profile_img}
        ></Avatar>
        { this.props.noPopUp
          ? null
          : <Popover
            id="user-popper"
            open={open}
            onClose={this.handleClose}
            anchorEl={anchor}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}

          >
            <UserCard user={this.props.user} />
          </Popover>
        }
      </div>
    )
  }
}