import React from 'react';


const PostFormView = ({postFormEdit, categories, category}) => {

	const onFormChange = (e) => postFormEdit(e.target.name, e.target.value)

	return <div>
		<div className="form-group">
			<input type="text" className="form-control" placeholder="Post Title*" onChange={onFormChange} name="title"/>
		</div>
		<div className="form-group">
			<select className="custom-select" value={category}
			        onChange={onFormChange} name="category">
				<option value="">Post category*</option>
				{categories.map((cat, index) => <option value={cat.name} key={index}>{cat.name}</option>)}
			</select>
		</div>
		<div className="form-group">
            <textarea className="form-control" placeholder="Post content*" rows="7"
                      onChange={onFormChange} name="body"/>
		</div>
	</div>
}
export default PostFormView;