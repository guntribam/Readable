import React from 'react';
import {connect} from 'react-redux'
import {createPost} from '../../actions'
import MainAreaView from "./MainAreaView";

const mapStateToProps = () => {}
const mapDispatchToProps = (dispatch) => ({createPost: () => dispatch(createPost())})

export default connect(mapStateToProps, mapDispatchToProps)(MainAreaView);