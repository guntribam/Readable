import {take, put} from 'redux-saga/effects'

import {getPosts, FETCH_POSTS} from "../actions";

export function* getPostsSaga() {
    yield take(FETCH_POSTS);
    const response = yield fetch('http://localhost:3001/posts', {headers: {Authorization: 'show'}});
    const posts = yield response.json();
    yield put(getPosts(posts))
}