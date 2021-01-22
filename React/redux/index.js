var redux = require('redux');
var createStore = redux.createStore;

var initialData = {
    counter: 0,
    value: 0
};

var reducer = function(state=initialData, action) {
    console.log('reducer called with state', state)
    console.log('reducer called with action', action)
    switch(action.type){
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter+action.payload
            }
        case 'INC_VALUE':
            return {
                ...state,
                value: state.value+action.payload
            }
        default:
            return state;
    }
}

var store = createStore(reducer);

console.dir(store);

store.subscribe(function(){
    if(store.getState().value > 1) {
        console.log('INSIDE SUBSCRIPTION')
    }
})

console.dir(store.getState());

store.dispatch({
    type: 'INC_COUNTER',
    payload: 1
})

console.dir(store.getState());

store.dispatch({
    type: 'INC_VALUE',
    payload: 1
})

store.dispatch({
    type: 'INC_VALUE',
    payload: 5
})
store.dispatch({
    type: 'INC_VALUE',
    payload: 7
})

console.dir(store.getState());