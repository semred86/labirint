import { combineReducers } from 'redux'
import arrowsReducer from './arrowsReducer'
import fieldReducer from './fieldReducer'

const rootReducer = combineReducers({
  field: fieldReducer,
  arrows: arrowsReducer
})
export default rootReducer
