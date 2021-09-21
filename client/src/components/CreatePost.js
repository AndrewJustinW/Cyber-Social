import React from 'react'
import CameraAlt from '@material-ui/icons/CameraAlt';
import Send from '@material-ui/icons/Send';

const CreatePost = () => {
    return (
        <div className="create-post">

            <div className="create-post-wrapper">

                <div className="create-post-top">

                    <img className="create-post-profile-pic" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                    <div className="create-post-input-container">

                        <input type="text" placeholder="Whats on your mind, Andrew?" className="create-post-input" />

                    </div>
                </div>
                <div className="create-post-bottom">

                    <div className="create-post-bottom-button"> <CameraAlt className="create-post-icon" /> <span>Photo</span></div>
                    <div className="create-post-bottom-button"> <Send className="create-post-icon" /> <span>Post</span></div>

                </div>
            </div>

        </div>
    )
}

export default CreatePost
