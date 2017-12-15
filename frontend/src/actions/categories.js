import {makeActionCreator} from "../utility";

export const GET_CATEGORIES = "GET_CATEGORIES"
export const getCategories = makeActionCreator(GET_CATEGORIES,"categories");


