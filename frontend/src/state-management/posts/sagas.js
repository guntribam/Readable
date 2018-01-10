import {takeLatest, take, put} from 'redux-saga/effects'
import {SUBMIT_POST, savePost, toogleCreatePostForm, getPosts} from "./actions";
import {INIT_APP} from "../app-actions";

export function* getPostsSaga() {
	yield take(INIT_APP);
	const response = yield fetch('http://localhost:3001/posts', {headers: {Authorization: 'authorized'}});
	const posts = yield response.json();
	const postsAdapted = posts.reduce((prev, curr) => {
		prev[curr.id] = curr;
		return prev;
	},{})
	yield put(getPosts(postsAdapted))
}

export function* savePostsSaga() {
	yield takeLatest(SUBMIT_POST, savePosts);
}

function* savePosts({post}) {
	const response = yield fetch('http://localhost:3001/posts',
		{
			method: 'POST',
			body: JSON.stringify(post),
			headers: {'Content-Type': 'application/json', 'Authorization': 'authorized'}
		}
	);
	const data = yield response.json();
	yield put(savePost(data))
	yield put(toogleCreatePostForm())
}