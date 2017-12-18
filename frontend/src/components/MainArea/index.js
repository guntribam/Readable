import React from 'react';
import {connect} from 'react-redux'
import {createPost} from '../../actions'
import MainAreaView from "./MainAreaView";

const mapStateToProps = ({postsStore}) => ({createPost: postsStore.createPost})
const mapDispatchToProps = (dispatch) => ({newPost: () => dispatch(createPost())})

export default connect(mapStateToProps, mapDispatchToProps)(MainAreaView);