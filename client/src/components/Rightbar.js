import React from 'react'
import FriendSuggestion from './FriendSuggestion'
import OnlineFriend from './OnlineFriend'

const Rightbar = () => {
    return (
        <div className="rightbar-wrapper">

            <h3 className="rightbar-title">Online Friends</h3>


            <ul className="rightbar-online-friends">

                <OnlineFriend />
                <OnlineFriend />
                <OnlineFriend />
                <OnlineFriend />

            </ul>

            <h3 className="rightbar-title">People you may know</h3>


            <ul className="rightbar-friend-suggestions">
                <FriendSuggestion />
                <FriendSuggestion />
                <FriendSuggestion />
                <FriendSuggestion />
                <FriendSuggestion />


            </ul>


        </div>
    )
}

export default Rightbar
