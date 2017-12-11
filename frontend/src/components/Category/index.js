import React from 'react';

const Category = ({name}) =>
	<button type="button" class="btn btn-light d-flex justify-content-between">
		{name} <span class="badge badge-light align-middle">9</span>
		<span class="sr-only">total posts</span>
	</button>

export default Category;
