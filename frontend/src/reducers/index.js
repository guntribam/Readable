import postsStore from './Posts'
import categoriesStore from './Categories'
import {combineReducers} from 'redux'

export default combineReducers({postsStore, categoriesStore});