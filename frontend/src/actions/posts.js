import {makeActionCreator} from "../utility";

export const GET_POSTS = "GET_POSTS";
export const getPosts = makeActionCreator(GET_POSTS, "posts");

export const CREATE_POST = "CREATE_POST";
export const createPost = makeActionCreator(CREATE_POST);

export const SAVE_POST = "SAVE_POST";
export const savePost = makeActionCreator(SAVE_POST, "post");

export const EDIT_POST = "EDIT_POST";
export const postFormEdit = makeActionCreator(EDIT_POST, "field", "value");