import React from 'react'
import UserCard from '../UserCard'
import RecentActivity from '../RecentActivity'
import Paper from '@material-ui/core/Paper'

import styles from './styles.scss'

export const Profile = ({ match, users }) => {
  const user = users.filter(user => user.id === parseInt(match.params.uuid))[0]

  if (user) {
    return (
      <div>
        <Paper className={styles.backgroundCard}/>
        <div className={styles.layout}>
          <UserCard user={user} />
          <div className={styles.activty}>
            <RecentActivity user={user.id} userProfile />
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Loading....</h1>
  }

}