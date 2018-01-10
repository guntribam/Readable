import postsStore from './posts/reducers';
import categoriesStore from './categories/reducers';
import usersStore from './users/reducers';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

export default combineReducers({postsStore, categoriesStore, usersStore, route: routerReducer});