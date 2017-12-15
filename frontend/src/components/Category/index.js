import React from 'react';

const Category = ({name}) =>
	<button type="button" className="btn btn-light d-flex justify-content-between">
		{name} <span className="badge badge-light align-middle">9</span>
		<span className="sr-only">total posts</span>
	</button>

export default Category;
