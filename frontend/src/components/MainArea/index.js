import React from 'react';
import {connect} from 'react-redux';
import MainAreaView from "./MainAreaView";
import {submitPost, toogleCreatePostForm, updatePost} from "../../state-management/posts/actions";

const mapStateToProps = ({postsStore}) => {
	const {postForm, showPostForm, isUpdating} = postsStore;
	return {postForm, showPostForm, isUpdating}
};
const mapDispatchToProps = (dispatch) => {
	return {
		submitPost: (post) => dispatch(submitPost(post)),
		toogleCreatePostForm: () => dispatch(toogleCreatePostForm()),
		updatePost: (post) => dispatch(updatePost(post))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAreaView);