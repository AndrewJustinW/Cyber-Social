import React, { useState } from 'react'
import HighlightOff from '@material-ui/icons/HighlightOff';
import ThumbUp from '@material-ui/icons/ThumbUp';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import Comments from './Comments';
import Bookmark from '@mui/icons-material/BookmarkAddOutlined';
import SmsOutlined from '@mui/icons-material/SmsOutlined';

const Post = () => {

    const [commentsActive, setCommentsActive] = useState(false)

    return (
        <div className="post">

            <div className="post-top">

                <img className="post-profile-pic" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                <div className="post-info">
                    <span className="post-username"> Phantom$</span>
                    <span className="post-date"> 5hs ago</span>
                </div>
                <HighlightOff className="delete-post-button" />

            </div>

            <div className="post-center">
                <p className="post-text">Example text because it's example text that was written as an example so that I can have text here to use as an example of when someone enters text into a post for example.</p>

                <div className="post-img-container">
                    <img src={process.env.PUBLIC_URL + '/assets/images/spaceman.png'} alt="" className="post-img" />

                </div>

                <hr />

                <div className="post-stats">
                    <div className="post-stats-wrapper">
                        <div className="post-like-counter">

                            <FavoriteOutlined fontSize="small" />
                            <span className='like-count'>4</span>

                        </div>
                        <span className="post-comments" onClick={() => { setCommentsActive(!commentsActive) }}>0 Comments</span>
                    </div>

                </div>
            </div>

            <div className="post-options">
                <div className="post-options-wrapper">
                    <div className="post-option">
                        <FavoriteBorderOutlined />
                        <span>Like</span>
                    </div>
                    <div className="post-option" onClick={() => { setCommentsActive(!commentsActive) }}>
                        <SmsOutlined />
                        <span>Comment</span>

                    </div>
                    <div className="post-option">
                        <Bookmark />
                        <span>Save</span>
                    </div>
                </div>
            </div>

            {commentsActive && <Comments />}


        </div>

    )
}

export default Post
