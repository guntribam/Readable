import React from 'react';
import {Link} from "react-router-dom";

const ListButtons = () =>
	<Link to="/createPost">
		<button className="btn btn-secondary">New Post</button>
	</Link>
export default ListButtons;