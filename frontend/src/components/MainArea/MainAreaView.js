import React from 'react';
import AddPost from '../PostForm';
import Posts from '../Posts';
import uuidv1 from 'uuid/v1';


const MainAreaView = ({submitPost, showPostForm, postForm, isUpdating, toogleCreatePostForm, updatePost}) => {

	const buildPost = (post) => ({
		id: uuidv1(),
		timestamp: new Date(),
		title: post.title,
		body: post.body,
		author: post.author,
		category: post.category,
		voteScore: 1,
		deleted: false,
		commentCount: 0
	});
	const savePost = (isUpdating) => () => isUpdating ? updatePost(postForm) : submitPost(buildPost(postForm));

	return <div className="col-md-8">
		<div className="d-flex justify-content-between">
			<h2>Posts</h2>
			{
				(showPostForm || isUpdating)
					? <div>
						<button className="btn btn-secondary mr-2" onClick={savePost(isUpdating)}>
							{isUpdating ? 'Update' : 'Save'}
						</button>
						<button className="btn btn-secondary" onClick={toogleCreatePostForm}>Cancel</button>
					</div>
					: <button className="btn btn-secondary" onClick={toogleCreatePostForm}>New Post</button>
			}
		</div>
		<hr className="my-3"/>
		{showPostForm ? <AddPost/> : <Posts/>}
	</div>;
}

export default MainAreaView;