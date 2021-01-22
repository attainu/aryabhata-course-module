import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionfile';
import PropTypes from 'prop-types';
import Display from '../component/Display'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        console.log("props>>",this.props)
        return(
            <div>
                <h1>Redux</h1>
                <Display datalist = {this.props.mydata}/>
            </div>
        )
    }
}

///We are receiving state from store
// now want to use in component
// so bind as a prop in the component
// we are binding state coming from store to props of component
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

Home.protoTypes={
    dispatch:PropTypes.func 
}


export default connect(mapStateToProps)(Home)


/*
function mapDispatchToProps(){
    return bindActionCreators({moviesList},dispatch)
}
*/
