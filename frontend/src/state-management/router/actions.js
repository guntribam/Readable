import {makeActionCreator} from "../utility";

export const UPDATE_POST_ROUTER = "UPDATE_POST_ROUTER";
export const updatePostRouter = makeActionCreator(UPDATE_POST_ROUTER, "post");