import React from 'react'

const Comments = () => {
    return (
        <div className="comments-container">

            <div className="create-comment">
                <div className="create-comment-wrapper">


                    <img className="create-comment-profile-pic" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                    <div className="create-comment-input-container">

                        <input type="text" placeholder="Write a comment.." className="create-comment-input" />

                    </div>

                </div>
            </div>

            <div className="all-comments">

            </div>


        </div>
    )
}

export default Comments
