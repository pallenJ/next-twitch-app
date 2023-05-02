import { combineReducers } from 'redux'
import { counterExampleReducer } from './example'

export default combineReducers({
  counterExample: counterExampleReducer
})
