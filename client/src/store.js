import { createStore, combineReducers } from 'redux'

import ryansReducer from './reducers/ryansReducer'
// import all reducers here

const rootReducer = combineReducers({
  ryansReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store