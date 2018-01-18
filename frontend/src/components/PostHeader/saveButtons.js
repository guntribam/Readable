import React from 'react';
import {Link} from "react-router-dom";

const SaveButtons = () =>
	<div>
		<button className="btn btn-secondary mr-2" onClick={() => {}}>Save</button>
		<Link to="/">
			<button className="btn btn-secondary">Cancel</button>
		</Link>
	</div>
export default SaveButtons;