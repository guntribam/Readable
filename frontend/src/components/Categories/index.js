import React from 'react';
import Category from "../Category";

const Categories = () =>
	<div class="card">
		<h4 class="card-header">Categories</h4>
		<div className="d-flex flex-column">
				<Category name="Music"/>
				<Category name="Tech"/>
				<Category name="science"/>
		</div>
	</div>


export default Categories;
