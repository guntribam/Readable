import React from 'react';
import {connect} from 'react-redux'
import PostFormView from "./PostFormView";
import {postFormEdit, submitPost} from '../../state-management/posts/actions'

const mapStateToProps = ({categoriesStore, postsStore, route}) => {
	console.log("route", route)
	const {categories} = categoriesStore
	const postForm = postsStore.postForm
	return {categories, postForm}
};
const mapDispatchToProps = (dispatch) => ({
	submitPost: (post) => dispatch(submitPost(post)),
	postFormEdit: (field, value) => dispatch(postFormEdit(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormView);