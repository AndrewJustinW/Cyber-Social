import React from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const FriendSuggestion = () => {
    return (
        <li className="rightbar-friend-suggestion">
            <img className="rightbar-profile-img" src="/assets/images/images.jpeg" alt="a" />

            <span className="rightbar-username"> Thomas Jefferson </span>
            <PersonAddAlt1Icon className="rightbar-icon" />

        </li >
    )
}

export default FriendSuggestion
