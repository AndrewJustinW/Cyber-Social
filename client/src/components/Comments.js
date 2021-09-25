import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SingleComment from './SingleComment';

const Comments = () => {
    return (
        <div className="comments-container">

            <div className="create-comment">
                <div className="create-comment-wrapper">


                    <img className="create-comment-profile-pic" src={process.env.PUBLIC_URL + '/assets/images/images.jpeg'} alt="a" />
                    <div className="create-comment-input-container">

                        <input type="text" placeholder="Write a comment.." className="create-comment-input" />

                        <div className="submit-comment-container">
                            <KeyboardArrowRight className="submit-comment-icon" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="all-comments">

                <SingleComment />
                <SingleComment />
                <SingleComment />


            </div>


        </div>
    )
}

export default Comments
