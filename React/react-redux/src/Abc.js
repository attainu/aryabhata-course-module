import { connect } from 'react-redux';
const Abc = (props) => {
    //1st
    const increaseCounter = () => {
        this.props.dispatch({
            type: 'INC_COUNTER',
            payload: 2
        })
    }
    
    //2nd
    const decreaseCounter = () => {
        this.props.dispatch({
            type: 'DEC_COUNTER',
            payload: 1
        })
    }
    return (
        <div>
                <h3>React Redux- Function Component</h3>
                <button onClick={increaseCounter}>Increment</button>
                <button onClick={decreaseCounter}>Decrement</button>
                <label> {props.counter} </label>
            </div>
    )
};


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Abc);
