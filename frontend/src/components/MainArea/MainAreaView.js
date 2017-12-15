import React from 'react';
import PostsController from "../PostsController";

const MainAreaView = ({createPost}) =>
    <div className="col-md-8">
        <div className="d-flex justify-content-between">
            <h2>Posts</h2>
            <button className="btn btn-secondary" onClick={createPost()}>New Post</button>
        </div>
        <hr className="my-3"/>
        <PostsController />
    </div>
export default MainAreaView;