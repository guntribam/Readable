import React from 'react';
import {connect} from 'react-redux'
import PostView from "./PostView";
import {toogleUpdatePostForm} from "../../state-management/posts/actions";

const mapStateToProps = ({usersStore}) => (
	{
		currentUser: usersStore.user
	}
);

const mapDispatchToProps = (dispatch) => (
	{
		toogleUpdatePostForm: (post) => dispatch(toogleUpdatePostForm(post))
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(PostView);