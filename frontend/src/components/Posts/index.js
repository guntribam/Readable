import React from 'react';
import {connect} from 'react-redux'
import PostsView from "./PostsView";

const mapStateToProps = ({postsStore}) => {
	console.log("olha isso", postsStore.posts)
	return {
		posts: postsStore.posts && Object.values(postsStore.posts),
	}
};

export default connect(mapStateToProps)(PostsView);