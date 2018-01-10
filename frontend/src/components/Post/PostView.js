import React from 'react';
import './Post.css'

const calculateElapsedTime = (timestamp) => {
	return "6 hours"
};


const Post = ({post, currentUser, toogleUpdatePostForm}) => {

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
				<button onClick={() => toogleUpdatePostForm(post)}>
					<span className="oi oi-pencil" title="update" aria-hidden="true" />
				</button>
				<button>
					<span className="oi oi-trash" title="delete" aria-hidden="true" />
				</button>
			</div>
		}
	</div>;
};
export default Post;
