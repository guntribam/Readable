import React from 'react';
import './Post.css'
import UpdateIcon from 'react-icons/lib/go/pencil'
import DeleteIcon from 'react-icons/lib/go/trashcan'

const calculateElapsedTime = (timestamp) => {
    return "6 hours"
};


const Post = ({post, currentUser, startUpdateSaga}) => {

    const isAuthor = currentUser === post.author;
    return <div className="card my-3 d-flex flex-row justify-content-between">
        <div className="post-container">
            <div className="post-vote-controls">
                <button>+</button>
                <strong>{post.voteScore}</strong>
                <button>-</button>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h3>{post.title}</h3>
                <span>submitted {calculateElapsedTime(post.timestamp)} ago by {isAuthor ? 'you' : post.author}
                    to {post.category} - {post.commentCount} comments</span>
            </div>
        </div>
        {
            isAuthor && <div className="d-flex align-items-end">
                <button onClick={() => startUpdateSaga(post)}>
                    <UpdateIcon />
                </button>
                <button>
                    <DeleteIcon />
                </button>
            </div>
        }
    </div>;
};
export default Post;
