import React from 'react';
import PostForm from '../PostForm';
import Posts from '../Posts';

import PostHeader from '../PostHeader'
import {Link} from "react-router-dom";

const MainAreaView = ({submitPost, showPostForm, postForm, isUpdating, toogleCreatePostForm, updatePost}) => {

	//const savePost = (isUpdating) => () => isUpdating ? updatePost(postForm) : submitPost(buildPost(postForm));

	return <div className="col-md-8">
		<PostHeader>
			<Link to="/submit">
				<button className="btn btn-secondary">New Post</button>
			</Link>
		</PostHeader>
		<Posts/>
	</div>;
}

export default MainAreaView;