import React from 'react';
import {connect} from 'react-redux'
import AddPost from "./AddPost";

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps)(AddPost);