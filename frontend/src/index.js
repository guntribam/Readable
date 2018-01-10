//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
//ICONS
import 'open-iconic/font/css/open-iconic-bootstrap.css'

//REDUX
import reducer from './state-management/combineReducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

//REDUX-SAGA
import createSagaMiddleware from 'redux-saga'
import {initSagas} from './state-management/initSagas'

//MAIN ACTION
import {initApp} from "./state-management/app-actions";

//ROUTER
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerMiddleware, push} from 'react-router-redux'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const history = createHistory()

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, routeMiddleware));
initSagas(sagaMiddleware);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

store.dispatch(initApp());
