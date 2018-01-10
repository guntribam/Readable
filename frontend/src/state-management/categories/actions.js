import {makeActionCreator} from "../utility";

export const GET_CATEGORIES = "GET_CATEGORIES"
export const getCategories = makeActionCreator(GET_CATEGORIES,"categories");

export const CHANGE_CATEGORY = "CHANGE_CATEGORY"
export const changeCategory = makeActionCreator(CHANGE_CATEGORY,"categorySelected");


