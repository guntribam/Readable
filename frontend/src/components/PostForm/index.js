import React from 'react';
import {connect} from 'react-redux'
import PostFormView from "./PostFormView";
import {postFormEdit} from '../../state-management/posts/actions'

const mapStateToProps = ({categoriesStore, postsStore}) => {
	const {categories} = categoriesStore
	const {category} = postsStore.postForm
	return {categories, category}
};
const mapDispatchToProps = (dispatch) => ({
	postFormEdit: (field, value) => dispatch(postFormEdit(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormView);