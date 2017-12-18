import {GET_CATEGORIES} from '../actions'

const initialState = {
    categories: []
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            const {categories} = action;
            return {
                ...state,
                categories
            };
        default:
            return state;
    }
}

export default categories;