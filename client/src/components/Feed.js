import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed-wrapper">

            <CreatePost className="feed-item" />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
