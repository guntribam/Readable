import React from 'react';
import './Post.css'

const Post = ({title, body, author, voteScore, category, commentCount}) =>
	<div className="card my-3">
		<div className="post-container">
			<div className="post-vote-controls">
				<button>+</button>
				<strong>{voteScore}</strong>
				<button>-</button>
			</div>
			<div className="d-flex flex-column justify-content-center">
				<h3>{title}</h3>
				<span>submitted 5 hours ago by {author} to {category} - {commentCount} comments</span>
			</div>
		</div>
	</div>

export default Post;