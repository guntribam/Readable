import React from 'react';
import Post from "../Post";

const Posts = ({posts}) =>
	<div>
		{posts && posts.map((post, index) => <Post key={index} post={post} />)}
	</div>;
export default Posts;