import React from 'react';
import {Link} from "react-router-dom";

const Header = () =>
	<header>
		<nav className="navbar navbar-dark bg-dark flex-row justify-content-between">
			<Link className="navbar-brand" to="/">
				<h1>Readable</h1>
			</Link>
			<form className="form-inline">
				<div className="navbar-text d-flex flex-column">
					<h5 >Welcome Anonymous</h5>
					<button className="btn btn-outline-light btn-sm rounded">
						<strong>Change User</strong>
					</button>
				</div>
			</form>
		</nav>
	</header>

export default Header;