import postsStore from './Posts'
import categoriesStore from './Categories'
import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({postsStore, categoriesStore, form: formReducer});