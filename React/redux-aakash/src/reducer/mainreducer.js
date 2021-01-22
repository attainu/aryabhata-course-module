import {combineReducers} from 'redux';
import films from './movies_reducers';

const rootReducer = combineReducers({
    films
})

export default rootReducer;