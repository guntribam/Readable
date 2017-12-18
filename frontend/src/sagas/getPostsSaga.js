import  {take, put} from 'redux-saga/effects'
import {getPosts, INIT_APP} from "../actions";

export function* getPostsSaga() {
    yield take(INIT_APP);
    const response = yield fetch('http://localhost:3001/posts', {headers: {Authorization: 'authorized'}});
    const posts = yield response.json();
    console.log("posts saga", posts)
    yield put(getPosts(posts))
}