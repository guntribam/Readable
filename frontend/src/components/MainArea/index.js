import React from 'react';
import {connect} from 'react-redux'
import {createPost, savePost} from '../../actions'
import MainAreaView from "./MainAreaView";

const mapStateToProps = ({postsStore}) => {
    const {createPost} = postsStore
    console.log('state', postsStore)
    return {createPost}
}
const mapDispatchToProps = (dispatch) => (
    {
        newPost: () => dispatch(createPost()),
        savePost: () => dispatch(savePost())
    })

export default connect(mapStateToProps, mapDispatchToProps)(MainAreaView);