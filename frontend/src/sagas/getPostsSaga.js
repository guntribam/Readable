import {take, put} from 'redux-saga/effects'
import {getPosts, INIT_APP} from "../actions";

export function* getPostsSaga() {
    yield take(INIT_APP);
    const response = yield fetch('http://localhost:3001/posts', {headers: {Authorization: 'show'}});
    const posts = yield response.json();
    yield put(getPosts(posts))
}