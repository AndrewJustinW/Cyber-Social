import React from 'react'
import FriendSuggestion from './FriendSuggestion'
import OnlineFriend from './OnlineFriend'

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
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

    const ProfileRightbar = () => {

        return (

            <div className="profile-rightbar">

                <div className="profile-stats">
                    <div className="profile-stat">
                        <span>10</span>
                        <span>Followers</span>
                    </div>

                    <div className="profile-stat profile-stat-middle">
                        <span>20</span>
                        <span>Following</span>
                    </div>

                    <div className="profile-stat">
                        <span>5</span>
                        <span>Posts</span>
                    </div>
                </div>

                <div className="profile-about">

                    <div className="profile-heading-container">

                        <h4 className="profile-heading">About</h4>

                    </div>

                    <div className="about-content">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere voluptas fugit illo! Quae molestias modi pariatur esse aut assumenda! Iure adipisci fuga facilis culpa dignissimos. Totam voluptate sapiente at!</p>

                        <ul className="socials-links">
                            <li className="social-link">https://blah.com</li>
                            <li className="social-link">https://stuff.com</li>
                            <li className="social-link">https://abcd123.com</li>

                        </ul>
                    </div>

                </div>

                <div className="profile-followings">
                    <div className="profile-heading-container">
                        <h4 className="profile-heading">Following</h4>
                    </div>

                    <ul className="following-users">

                        <li className="following-user">
                            <img className="following-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="following-username">Bob</span>

                        </li>

                        <li className="following-user">
                            <img className="following-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="following-username">Bob</span>

                        </li>

                        <li className="following-user">
                            <img className="following-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="following-username">Bob</span>

                        </li>

                        <li className="following-user">
                            <img className="following-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="following-username">Bob</span>

                        </li>


                    </ul>
                </div>

                <div className="profile-followers">
                    <div className="profile-heading-container">
                        <h4 className="profile-heading">Followers</h4>
                    </div>

                    <ul className="followers-users">

                        <li className="follower-user">
                            <img className="follower-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="follower-username">Bob</span>

                        </li>

                        <li className="follower-user">
                            <img className="follower-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="follower-username">Bob</span>

                        </li>

                        <li className="follower-user">
                            <img className="follower-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="follower-username">Bob</span>

                        </li>

                        <li className="follower-user">
                            <img className="follower-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="follower-username">Bob</span>

                        </li>

                        <li className="follower-user">
                            <img className="follower-user-img" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                            <span className="follower-username">Bob</span>

                        </li>


                    </ul>
                </div>


            </div>
        )
    }

    return (
        <div className="rightbar">

            {profile ? <ProfileRightbar /> : <HomeRightbar />}

        </div>
    );
}

