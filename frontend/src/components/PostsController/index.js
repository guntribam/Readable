import React from 'react';
import {connect} from 'react-redux'
import PostsControllerLogic from "./PostsControllerLogic";

const mapStateToProps = ({addPost}) => ({addPost})

export default connect(mapStateToProps)(PostsControllerLogic);