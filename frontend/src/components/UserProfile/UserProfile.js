import React from 'react' 

export const UserProfile = ({ match }) => {
    return (
    <div>
        <h1>User!</h1>
        <p>ID: {match.params.uuid}</p>
    </div>
    )
}