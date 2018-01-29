//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
//ICONS
import 'open-iconic/font/css/open-iconic-bootstrap.scss'

//REDUX
import reducer from './state-management/combineReducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

//REDUX-SAGA
import {sagaMiddleware,initSagas} from './state-management/config/saga-config'

//MAIN ACTION
import {initApp} from "./state-management/app-actions";

//ROUTER
import {ConnectedRouter as Router} from 'react-router-redux'
import {routeMiddleware, history} from './state-management/config/router-config'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware, routeMiddleware));

initSagas(sagaMiddleware);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App/>
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

store.dispatch(initApp());
