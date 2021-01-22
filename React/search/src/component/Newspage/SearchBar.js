import React,{Component} from 'react';
import './search.css'

class Search extends Component {
    constructor(){
        super()
        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    
    render(){
        var {data} = this.state
        return(
            <header>
                <center>
                   <input onChange={this.handleChange}/>
                   <div style={{color:'white'}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )
    }
    
}

export default Search;