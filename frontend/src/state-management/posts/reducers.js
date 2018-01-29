import {
	GET_POSTS,
	TOOGLE_CREATE_POST_FORM,
	TOOGLE_UPDATE_POST_FORM,
	EDIT_POST,
	SAVE_POST,
	UPDATE_POST
} from "./actions";

const initialState = {
	postForm: {
		author: 'anonymous',
		category: '',
		body: '',
		title: '',
		isValid: true
	},
};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.posts
			};
		case EDIT_POST:
			const {field, value} = action;
			return {
				...state,
				postForm: {
					...state.postForm,
					[field]: value
				}
			};
		case SAVE_POST:
			return {
				...state,
				posts: {
					...state.posts,
					[action.post.id]: action.post
				}
			};
		case UPDATE_POST:
			return {
				...state,
				posts: {
					...state.posts,
					[action.post.id]: action.post
				}
			};
		default:
			return state;
	}
};

export default posts;
