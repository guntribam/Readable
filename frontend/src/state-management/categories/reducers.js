import {GET_CATEGORIES, CHANGE_CATEGORY} from './actions'

const initialState = {
	categories: [],
	categorySelected: 'Choose a category'
};

const categories = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES:
			const {categories} = action;
			return {
				...state,
				categories
			};
		case CHANGE_CATEGORY:
			const {categorySelected} = action;
			return {
				...state,
				categorySelected
			};
		default:
			return state;
	}
}

export default categories;