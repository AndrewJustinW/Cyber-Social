import React from 'react'
import Leftbar from '../components/Leftbar'
import Nav from '../components/Nav'
import Post from '../components/Post'
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Rightbar from '../components/Rightbar';


const Profile = () => {
    return (
        <div className="profile">

            <Nav />

            <div className="profile-wrapper">

                <div className="profile-leftbar">

                    <Leftbar />

                </div>

                <div className="profile-main">

                    <div className="profile-cover">

                        <div className="profile-cover-contents">

                            <img src={process.env.PUBLIC_URL + '/assets/images/cover-photo.jpg'} alt="" className="profile-cover-img" />
                            <img src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="" className="profile-user-img" />

                        </div>

                    </div>

                    <div className="profile-username-container">

                        <h2 className="profile-username">Phantom$</h2>

                    </div>

                    <div className="profile-feed">

                        <Post />
                        <Post />
                        <Post />
                        <Post />

                    </div>

                    <div className="pageup-button" onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}>

                        <ArrowUpward />

                    </div>

                </div>

                <div className="rightbar">

                    <Rightbar profile />

                </div>

            </div>

        </div>
    )
}

export default Profile
