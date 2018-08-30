import React from 'react' 
import UserCard from '../UserCard'

export const Profile = ({ match }) => {
    return (
    <div>
        <UserCard uuid={match.params.uuid}/>
    </div>
    )
}