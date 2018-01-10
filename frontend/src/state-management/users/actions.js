import {makeActionCreator} from "../utility";

export const CHANGE_USER = "CHANGE_USER"
export const changeUser = makeActionCreator(CHANGE_USER, "user");

export const GET_USER = "GET_USER"
export const getUser = makeActionCreator(GET_USER);