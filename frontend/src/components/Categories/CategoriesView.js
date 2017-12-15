import React from 'react';
import Category from "../Category";

const CategoriesView = ({categories}) =>
	<div className="card">
		<h4 className="card-header">Categories</h4>
		<div className="d-flex flex-column">
			{categories.map((category,index) => <Category key={index} name={category.name}/>)}
		</div>
	</div>
export default CategoriesView;


