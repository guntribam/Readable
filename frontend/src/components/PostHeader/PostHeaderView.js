import React from 'react';

const PostHeaderView = ({children}) =>
	<div>
		<div className="d-flex justify-content-between">
			<h2>Posts</h2>
			<div>{children}</div>
		</div>
		<hr className="my-3"/>
	</div>;
export default PostHeaderView;