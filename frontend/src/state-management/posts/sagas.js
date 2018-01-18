import {takeLatest, take, put} from 'redux-saga/effects'
import {INIT_APP, initApp} from "../app-actions";
import {
	SUBMIT_POST,
	UPDATE_POST_SAGA,
	savePost, getPosts, updatePost,
	toogleCreatePostForm,
	toogleUpdatePostForm,
} from "./actions";

export function* getPostsSaga() {
	yield take(INIT_APP);
	const response = yield fetch('http://localhost:3001/posts', {headers: {Authorization: 'authorized'}});
	const posts = yield response.json();
	const postsAdapted = posts.reduce((prev, curr) => {
		prev[curr.id] = curr;
		return prev;
	}, {})
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
}

export function* updatePostSaga() {
	const {post} = yield take(UPDATE_POST_SAGA);
	console.log("update post", post)
	const response = yield fetch(`http://localhost:3001/posts/${post.id}`,
		{
			method: 'PUT',
			body: JSON.stringify(post),
			headers: {'Content-Type': 'application/json', 'Authorization': 'authorized'}
		}
	);
	const data = yield response.json();
	yield put(updatePost(data))
	yield put(toogleUpdatePostForm(post))
	yield put(initApp())
}
