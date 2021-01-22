import React from 'react';
import { connect } from 'react-redux';
import TodoItems from './TodoItems';
import logo from './logo.svg';
class Todo extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:"",
            task: "",
            title: "",
        }
    }
    
    changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }

    addTask = () => {
        console.log('addTask')

        if(!this.state.task) {
            this.setState({
                error: 'Please enter the task.'
            })
        }
        else if(this.props.todos.includes(this.state.task)){
            this.setState({
                error: 'Please enter the a new task.'
            })
        }
        else if(this.state.task.length < 10) {
            this.setState({
                error: 'Task must have atleat 10 characters.'
            })
        }
        else {
            this.props.dispatch({
                type: 'ADD_TASK',
                payload: {
                    id: new Date(),
                    title: this.state.title,
                    description: this.state.task
                }
            });
            this.setState({
                error:'',
                task:'',
                title:'',
            })
        }

    }

    render() {
        const imageStyle = {
            width: "20px",
            height: "20px"
        }
        return (
            <div style={{
                background: 'white',
                fontFamily: 'fantasy',
                color: 'green'
            }}>
                <img style={imageStyle} alt="logo" src={logo} />
                <h3>{this.props.title}</h3>
                <div>
                    <input name="title" value={this.state.title} onChange={this.changeHandler} placeholder="Title"/>
                    <input name="task" value={this.state.task} onChange={this.changeHandler} placeholder="Description"/>
                    <button onClick={this.addTask}>Add Tasks</button>
                </div>
                {
                    this.state.error &&
                    <div>
                        <span>{this.state.error}</span>
                    </div>
                }
                <TodoItems />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}
export default connect(mapStateToProps)(Todo);