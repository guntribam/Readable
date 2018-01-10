import {makeActionCreator} from "../utility";

export const GET_POSTS = "GET_POSTS";
export const getPosts = makeActionCreator(GET_POSTS, "posts");

export const TOOGLE_CREATE_POST_FORM = "TOOGLE_CREATE_POST_FORM";
export const toogleCreatePostForm = makeActionCreator(TOOGLE_CREATE_POST_FORM);

export const TOOGLE_UPDATE_POST_FORM = "TOOGLE_UPDATE_POST_FORM";
export const toogleUpdatePostForm = makeActionCreator(TOOGLE_UPDATE_POST_FORM, "post");

export const EDIT_POST = "EDIT_POST";
export const postFormEdit = makeActionCreator(EDIT_POST, "field", "value");

export const SUBMIT_POST = "SUBMIT_POST";
export const submitPost = makeActionCreator(SUBMIT_POST, "post")

export const SAVE_POST = "SAVE_POST";
export const savePost = makeActionCreator(SAVE_POST, "post")

export const UPDATE_POST = "UPDATE_POST";
export const updatePost = makeActionCreator(UPDATE_POST, "post")