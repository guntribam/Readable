import {makeActionCreator} from "../utility";

export const GET_POSTS = "GET_POSTS";
export const getPosts = makeActionCreator(GET_POSTS, "posts");

export const CREATE_POST = "CREATE_POST";
export const createPost = makeActionCreator(CREATE_POST);