import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

export const history = createHistory();
export const routeMiddleware = routerMiddleware(history);

