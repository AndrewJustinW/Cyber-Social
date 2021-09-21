import React from 'react'

const OnlineFriend = () => {
    return (
        <li className="rightbar-online-friend">
            <img className="rightbar-profile-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />

            <span className="rightbar-username">Thomas Jefferson</span>
        </li>
    )
}

export default OnlineFriend
