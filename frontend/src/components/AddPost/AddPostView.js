import React from 'react';

const AddPostView = ({postFormEdit}) =>
    <div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Post Title"
                   onChange={(e) => postFormEdit(e.target.name, e.target.value)} name="title"/>
        </div>
        <div className="form-group">
            <textarea className="form-control" placeholder="Post content" rows="10"
                      onChange={(e) => postFormEdit(e.target.name, e.target.value)} name="content"/>
        </div>
    </div>

export default AddPostView;