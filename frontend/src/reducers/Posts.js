import { createReducer } from './../utility';
import {GET_POSTS} from "../actions";

const initialState = [];

const posts = createReducer(initialState,{
    [GET_POSTS](state,{posts}) {
        return posts
    },
    [GET_POSTS](state,{}) {
        return {
            ...state,
            addPost: true
        }
    }
    ,
});

export default posts;
