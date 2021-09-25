import React from 'react'

const SingleComment = () => {
    return (
        <div className="single-comment">
            <img className="comment-profile-pic" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
            <div className="comment-wrapper">
                <div className="comment-top">
                    <span className="comment-username">$Phantom</span>
                    <span className="comment-date"> - 5 hrs ago.</span>
                </div>
                <span className="comment-text">Cool looking space helmet. </span>

            </div>
        </div>
    )
}

export default SingleComment
