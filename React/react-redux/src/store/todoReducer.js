const initalTodo =  [
    {
        id: new Date(),
        title: 'Default Task',
        description: 'Revise for the test'
    }
];

const todoReducer = (state, action) => {
    state = state || initalTodo

    switch (action.type) {
        case 'ADD_TASK':
            return [ ...state, action.payload ];
        case 'REMOVE_TASK':
            const todos = state.filter(function(item) {
                return item.id !== action.payload;
            });
            return [...todos];
        default:
            return state;
    }
};

export default todoReducer;