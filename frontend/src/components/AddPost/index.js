import React from 'react';
import {connect} from 'react-redux'
import AddPostView from "./AddPostView";
import {postFormEdit} from '../../actions'

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    postFormEdit: (field, value) => dispatch(postFormEdit(field, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostView);