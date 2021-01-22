import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SomeOtherComponent = (props) => {
    return (
        <h3>{ props.counter }</h3>
    )
};

class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0,
            check: 1,
            config: {
                counter: 0,
                other: 1
            }
        }
        this.interval = null;
    }
    componentDidMount() {
        console.log('componentDidMount')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            console.log(resp.data);
        })
        .catch(err=>{
            console.log(err);
        })

        this.interval = setInterval(()=>{
            console.log(new Date());
        },1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        if(this.state - prevState.counter !== 1) {
            console.log('componentDidUpdate')
        }
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.interval);
    }
    
    increment = () => {
        this.setState({
            config: {
                ...this.state.config,
                counter: this.state.counter+1
            }
        })
    }

    render() {
        console.log('render')
        return (
            <>
            <button onClick={this.increment}>{this.state.config.counter} clicks</button>
            <Link to={'/'}>Go Back Home</Link>
            <SomeOtherComponent counter={this.state.config.counter} />
            </>
        )
    }

}

export default LifeCycle;
