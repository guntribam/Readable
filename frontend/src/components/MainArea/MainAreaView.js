import React from 'react';
import AddPost from '../AddPost';
import Posts from '../Posts';

const MainAreaView = ({newPost, createPost, savePost}) =>
    <div className="col-md-8">
        <div className="d-flex justify-content-between">
            <h2>Posts</h2>
            {
                createPost
                    ? postFormButtons(savePost, newPost)
                    : <button className="btn btn-secondary" onClick={newPost}>New Post</button>
            }
        </div>
        <hr className="my-3"/>
        {createPost ? <AddPost/> : <Posts/>}
    </div>

const postFormButtons = (savePost, newPost) =>
    <div>
        <button className="btn btn-secondary mr-2" onClick={() => savePost()}>Salvar</button>
        <button className="btn btn-secondary" onClick={newPost}>Cancelar</button>
    </div>

export default MainAreaView;