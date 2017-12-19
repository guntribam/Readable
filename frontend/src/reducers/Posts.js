import {GET_POSTS, CREATE_POST, SAVE_POST, EDIT_POST} from "../actions";

const initialState = {
    createPost: false,
    postForm: {}
};

const posts = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            const {posts} = action;
            return {
                ...state,
                posts
            }
        case CREATE_POST:
            return {
                ...state,
                createPost: !state.createPost
            }
        case SAVE_POST:
            return {
                ...state,
                createPost: !state.createPost
            }
        case EDIT_POST:
            const {field, value} = action;
            return {
                ...state,
                postForm: {
                    ...state.postForm,
                    [field]: value
                }
            }
        default:
            return state;
    }
}


export default posts;
