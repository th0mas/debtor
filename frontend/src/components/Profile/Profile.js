import React from 'react'
import UserCard from '../UserCard'

export const Profile = ({ match, users }) => {
  const user = users.filter(user => user.id === parseInt(match.params.uuid))[0]
  return (
    <div>
      {user
        ? <UserCard user={user} />
        : <h1>Loading...</h1>}
    </div>
  )
}