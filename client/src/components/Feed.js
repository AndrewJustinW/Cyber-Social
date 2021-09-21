import React from 'react'
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import CreatePost from './CreatePost'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed-wrapper">

            <div className="pageup-button" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }}>

                <ArrowUpward />

            </div>

            <CreatePost className="feed-item" />
            <Post />
            <Post />
            <Post />
            <Post />



        </div>
    )
}

export default Feed
