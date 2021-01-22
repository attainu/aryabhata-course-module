import React from  'react';
import { connect } from 'react-redux';
const TodoItems = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {
                    props.todos.map((todo,idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <li>
                                <div >{todo.title}</div>
                                <p >{todo.description}</p>
                                <button onClick={() => props.deleteTask(todo.id)}>Delete</button>
                                </li>
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )

};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (todo) => dispatch({ type: 'REMOVE_TASK', payload: todo })
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
