import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    conditional_header = () => {
        if(sessionStorage.getItem('username')===null||sessionStorage.getItem('username')===undefined){
            return(
                <li><a href="https://github.com/login/oauth/authorize?client_id=100cc18d754140bbced1">Sign In With Git</a></li>
            )     
        }else{
            return(
                <li><a href=""><span className="glyphicon glyphicon-user"></span>Welcome {sessionStorage.getItem('username')}</a></li>
            ) 
        }
        
    }

    render(){
        return(
            <nav class="navbar navbar-inverse" style={{background:'teal'}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#">Developer Funnel</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li ><Link to="/viewbooking">Booking</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        {this.conditional_header()}
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            var requestData={
                code:code
            }
            fetch("http://localhost:3001/user",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                sessionStorage.setItem('username',data.login)
                this.setState({username:data.login})
            })
        }
    }
    
}


export default withRouter(Header);