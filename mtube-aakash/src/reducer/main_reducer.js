import {combineReducers} from 'redux';
import videos from './videos';
import auth from './auth_reducer'

const rootReducer = combineReducers({
    videos,
    auth
})

export default rootReducer;