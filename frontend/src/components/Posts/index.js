import React from 'react';
import {connect} from 'react-redux'
import PostsView from "./PostsView";

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(PostsView);