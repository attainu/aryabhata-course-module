import {combineReducers} from 'redux';
import videos from './videos';
import auth from './auth_reducer'
import profile from './profile_reducer'

const rootReducer = combineReducers({
    videos,
    auth,
    profile
})

export default rootReducer;