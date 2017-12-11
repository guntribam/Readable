import React from 'react';
import Post from "../Post";

const Posts = () =>
	<div className="col-md-8">
		<h2>Posts</h2>
		<hr className="my-3"/>
		<Post title="Bob Marley greatest music"
		      body="redemption song"
		      author="tiko"
		      timestamp="1467166872634"
		      category="music"
		      voteScore="2"
		      deleted="false"
		      commentCount="1"
		      id="asmdoaimsdi"
		/>
		<Post title="New language on the block"
		      body="julia"
		      author="experts"
		      timestamp="1467166872635"
		      category="tech"
		      voteScore="5"
		      deleted="false"
		      commentCount="1"
		      id="0wkdqwn"
		/>
	</div>

export default Posts;