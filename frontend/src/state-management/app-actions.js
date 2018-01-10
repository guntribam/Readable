import {makeActionCreator} from "./utility";

export const INIT_APP = "INIT_APP"
export const initApp = makeActionCreator(INIT_APP);