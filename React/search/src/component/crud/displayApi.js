import React,{Component} from 'react';
import DisplayUser from './displayUser'

const url = "http://localhost:9700/users"

class UserApi extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        console.log(this.state.users)
        return(
            <DisplayUser userdata={this.state.users}/>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}

export default UserApi;