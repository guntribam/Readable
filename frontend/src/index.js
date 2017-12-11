import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//
const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
