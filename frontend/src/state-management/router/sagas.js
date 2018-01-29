import {put, take} from "redux-saga/effects";
import {push} from "react-router-redux";
import {UPDATE_POST_ROUTER} from "./actions";
import {postFormEdit} from "../posts/actions";

export function* updatePostRouter() {
    const post = yield take(UPDATE_POST_ROUTER);
    Object.keys(post).forEach(key =>  yield put(postFormEdit(key, post[key])))
    yield put(updatePost(data))
    yield put(push('/'))
}