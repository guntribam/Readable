import React from 'react';
import {connect} from 'react-redux'
import PostsView from "./PostsView";

const mapStateToProps = ({postsStore}) => {
    return {posts: postsStore.posts}
}

export default connect(mapStateToProps)(PostsView);