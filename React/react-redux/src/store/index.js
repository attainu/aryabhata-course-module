import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import reducer from './reducer';

const reducers = combineReducers({
    todos: todoReducer,
    counters: counterReducer
});

const store = createStore(reducers);

export default store;
