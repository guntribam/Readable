import {makeActionCreator} from "../utility";

export {
    getPosts, GET_POSTS,
    createPost, CREATE_POST,
    savePost, SAVE_POST
} from './posts'

export {getCategories, GET_CATEGORIES} from './categories'

export const INIT_APP = "INIT_APP"
export const initApp = makeActionCreator(INIT_APP);
