import React from 'react';
import {connect} from 'react-redux';
import MainAreaView from "./MainAreaView";
import {submitPost, toogleCreatePostForm, updatePostSaga} from "../../state-management/posts/actions";

const mapStateToProps = ({postsStore, route}) => {
	console.log("route no mains", route)
	console.log("postsStore", postsStore)
	const {postForm, showPostForm, isUpdating} = postsStore;
	return {postForm, showPostForm, isUpdating}
};
const mapDispatchToProps = (dispatch) => {
	return {
		submitPost: (post) => dispatch(submitPost(post)),
		toogleCreatePostForm: () => dispatch(toogleCreatePostForm()),
		updatePost: (post) => dispatch(updatePostSaga(post))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAreaView);