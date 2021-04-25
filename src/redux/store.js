import { combineReducers, createStore } from 'redux'
import totoReducer from './totoReducer'

let reducers = combineReducers({
  todos: totoReducer,
})

let store = createStore(reducers)

window.store = store

export default store
