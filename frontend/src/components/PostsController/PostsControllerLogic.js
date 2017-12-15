import React from 'react';
import Posts from "../Posts";
import AddPost from "../AddPost";

const PostsControllerLogic = ({addPost}) => addPost ? <AddPost /> : <Posts/>
export default PostsControllerLogic;