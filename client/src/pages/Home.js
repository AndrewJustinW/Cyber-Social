import React from 'react'
import Feed from '../components/Feed'
import Leftbar from '../components/Leftbar'
import Nav from '../components/Nav'
import Rightbar from '../components/Rightbar'

const Home = () => {
    return (
        <div className="home">
            <Nav />

            <div className="home-wrapper">

                <div className="leftbar">

                    <Leftbar />

                </div>

                <div className="feed">

                    {/* <h2 className="feed-welcome">Welcome, Andrew!</h2> */}
                    <Feed />

                </div>

                <div className="rightbar">

                    <Rightbar />

                </div>

            </div>


        </div>
    )
}

export default Home
