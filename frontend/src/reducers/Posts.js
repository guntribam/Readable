import {GET_POSTS, CREATE_POST} from "../actions";

const initialState = {
    createPost: false
};

const posts = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            const {posts} = action;
            return {
                ...state,
                posts
            }
        case CREATE_POST:
            console.log("passou", !state.createPost)
            return {
                ...state,
                createPost: !state.createPost
            }
        default:
            return state;
    }
}


export default posts;
