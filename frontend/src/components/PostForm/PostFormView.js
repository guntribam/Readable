import React from 'react';
import PostHeader from '../PostHeader'
import {Link} from "react-router-dom";

const PostFormView = ({postFormEdit, categories, postForm, submitPost, actionLabel, buildPost}) => {

    const onFormChange = (e) => postFormEdit(e.target.name, e.target.value)

    return <div className="col-md-8">
        <PostHeader>
            <button className="btn btn-secondary mr-2" onClick={() => submitPost(buildPost(postForm))}>
                {actionLabel}
            </button>
            <Link to="/">
                <button className="btn btn-secondary">Cancel</button>
            </Link>
        </PostHeader>
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Post Title*"
                       onChange={onFormChange} name="title" value={postForm.title}/>
            </div>
            <div className="form-group">
                <select className="custom-select" value={postForm.category}
                        onChange={onFormChange} name="category">
                    <option value="">Post category*</option>
                    {categories.map((cat, index) => <option value={cat.name} key={index}>{cat.name}</option>)}
                </select>
            </div>
            <div className="form-group">
            <textarea className="form-control" placeholder="Post content*" rows="7"
                      onChange={onFormChange} name="body" value={postForm.body}/>
            </div>
        </div>
    </div>
}
export default PostFormView;