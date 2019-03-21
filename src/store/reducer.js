import { combineReducers } from 'redux'
import { reducer as userReducer} from './user/'

export default combineReducers({
  user: userReducer
})
