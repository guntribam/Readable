import React from 'react';
import {connect} from 'react-redux'
import PostFormView from "./PostFormView";
import {postFormEdit, submitPost} from '../../state-management/posts/actions'
import buildPost from './buildPost'

const mapStateToProps = ({categoriesStore, postsStore}) => {
	const {categories} = categoriesStore
	const postForm = postsStore.postForm
	return {categories, postForm, buildPost}
};
const mapDispatchToProps = (dispatch) => ({
	submitPost: (post) => dispatch(submitPost(post)),
	postFormEdit: (field, value) => dispatch(postFormEdit(field, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormView);