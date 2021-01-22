export const addTask = () => {
    console.log('addTask')

    if(!this.state.task) {
        this.setState({
            error: 'Please enter the task.'
        })
    }
    else if(this.state.todos.includes(this.state.task)){
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
        const todos = [ ...this.state.todos, this.state.task ];
        this.setState({
            error:'',
            task:'',
            todos: todos
        })
    }

}

export const deleteTask = (todo) => {
    // const todos = this.state.todos.filter(item => item !== todo);
    const todos = this.state.todos.filter(function(item) {
        return item !== todo;
    });
    this.setState({
        todos
    })
}