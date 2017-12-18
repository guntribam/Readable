import React from 'react';

const AddPostView = () =>
    <form>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Post Title" />
        </div>
        <div className="form-group">
            <textarea className="form-control" placeholder="Post content" rows="10"/>
        </div>
    </form>

export default AddPostView;