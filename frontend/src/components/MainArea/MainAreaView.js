import React from 'react';
import AddPost from '../AddPost';
import Posts from '../Posts';

const MainAreaView = ({newPost, createPost}) =>
    <div className="col-md-8">
        <div className="d-flex justify-content-between">
            <h2>Posts</h2>
            <button className="btn btn-secondary" onClick={newPost}>New Post</button>
        </div>
        <hr className="my-3"/>
        {console.log("olha o createPost", createPost)}
        {createPost ? <AddPost/> : <Posts/>}
    </div>
export default MainAreaView;