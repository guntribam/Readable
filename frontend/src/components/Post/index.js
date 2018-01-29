import React from 'react';
import {connect} from 'react-redux'
import PostView from "./PostView";
import {startUpdateSaga} from "../../state-management/posts/actions";

const mapStateToProps = ({usersStore}) => (
	{
		currentUser: usersStore.user
	}
);

const mapDispatchToProps = (dispatch) => {
    return {
        startUpdateSaga: (post) => dispatch(startUpdateSaga(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);