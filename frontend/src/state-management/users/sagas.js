import {take, put} from 'redux-saga/effects'
import {changeUser} from "./actions";
import {INIT_APP} from "../app-actions";

export function* getInitialUserSaga() {
	yield take(INIT_APP);
	const defaultUser = 'anonymous';
	yield put(changeUser(defaultUser))
}
