import {take, put} from 'redux-saga/effects';
import {getCategories} from "./actions";
import {INIT_APP} from '../app-actions';

export function* getCategoriesSaga() {
	yield take(INIT_APP);
	const response = yield fetch('http://localhost:3001/categories', {headers: {Authorization: 'show'}});
	const {categories} = yield response.json();
	yield put(getCategories(categories))
}