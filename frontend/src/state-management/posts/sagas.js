import {takeLatest, take, put, all, call} from 'redux-saga/effects'
import {INIT_APP} from "../app-actions";
import {push} from 'react-router-redux';
import {getPostsServer, createPostServer, updatePostServer} from "../../api/posts";
import {
    SUBMIT_POST,
    UPDATE_POST_SAGA,
    savePost, getPosts, updatePost,
    postFormEdit, START_UPDATE_SAGA,
} from "./actions";

export function* getPostsSaga() {
    yield take(INIT_APP);
    try {
        const response = yield getPostsServer();
        const posts = yield response.json();
        const postsAdapted = posts.reduce((prev, curr) => {
            prev[curr.id] = curr;
            return prev;
        }, {})
        yield put(getPosts(postsAdapted))
    } catch (error) {
        console.log("Erro no getPostsSaga", error)
    }
}

export function* savePostsSaga() {
    yield takeLatest(SUBMIT_POST, function* ({post}) {
        try {
            const response = yield createPostServer(post)
            const data = yield response.json();
            yield put(savePost(data))
            yield put(push('/'))
        } catch (error) {
            console.log("Erro no savePostsSaga", error)
        }
    });
}

export function* updatePostSaga() {
    yield takeLatest(UPDATE_POST_SAGA, function* ({post}) {
        try {
            const response = yield updatePostServer(post)
            const data = yield response.json();
            yield put(updatePost(data))
            yield put(push('/'))
        }
        catch (error) {
            console.log("Erro no updatePostServer", error)
        }
    });

}

export function* startUpdateSaga() {
    yield takeLatest(START_UPDATE_SAGA, function* ({post}) {
        yield all(Object.keys(post).map(key => put(postFormEdit(key, post[key]))))
        yield put(push('/update'))
    });
}
