import React from 'react'
import Leftbar from '../components/Leftbar'
import Nav from '../components/Nav'
import Post from '../components/Post'

const Profile = () => {
    return (
        <div className="profile">
            <Nav />

            <div className="profile-wrapper">

                <div className="profile-leftbar">

                    <Leftbar />

                </div>

                <div className="profile-main-container">




                    <div className="profile-main">

                        <div className="profile-main-feed">

                            <div className="profile-cover">

                                <div className="profile-cover-contents">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/cover-photo.jpg'} alt="" className="profile-cover-img" />
                                    <img src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="" className="profile-user-img" />
                                </div>

                            </div>

                            <div className="profile-username-container">

                                <h2 className="profile-username">Phantom$</h2>

                            </div>
                            <Post />
                            <Post />
                            <Post />
                            <Post />

                        </div>


                        {/* Move this entire div into it's own component / into rightbar component */}
                        <div className="profile-main-info">

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
                    </div>



                </div>






            </div>
        </div>
    )
}

export default Profile
