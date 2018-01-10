import {CHANGE_USER} from "./actions";

const initialState = {
	user: ''
}

const users = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_USER:
			return {
				...state,
				user: action.user
			}
		default:
			return state;
	}
}

export default users;
