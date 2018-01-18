import React from 'react';

const Header = ({navigateTo}) =>
	<header>
		<nav className="navbar navbar-dark bg-dark flex-row justify-content-between">
			<a className="text-white" style={{cursor: 'pointer'}} onClick={() => navigateTo('/')}><h1>Readable</h1></a>
			<form className="form-inline">
				<div className="navbar-text d-flex flex-column">
					<h5>Welcome Anonymous</h5>
					<button className="btn btn-outline-light btn-sm rounded">
						<strong>Change User</strong>
					</button>
				</div>
			</form>
		</nav>
	</header>

export default Header;