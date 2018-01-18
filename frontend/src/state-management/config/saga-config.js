import * as sagas from '../sagas';
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware();

export const initSagas = (sagaMiddleware)=>{
	Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};