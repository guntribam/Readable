import { createReducer } from './../utility';
import {GET_CATEGORIES} from '../actions'

const initialState = []

const categories = createReducer(initialState, {
    [GET_CATEGORIES](state,{categories}) {
        return categories;
    }
});

export default categories;