import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import {connect} from 'react-redux'
import config from '../config.json';
import {AUTH_ACTION,PROFILE_ACTION} from '../actions/actionfile'

class Login extends Component{
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('udetails'));
        console.log(">>>>",user)
        if(user){
            this.props.dispatch({
                type:AUTH_ACTION.LOGIN,
                payload: user.token
            })
            this.props.dispatch({
                type:PROFILE_ACTION.SET,
                payload: user.UserDetails
            })

        }
    }

    googleLogin = (response) => {
        console.log(response)
        if(!response || !response.accessToken){
            alert("Error While Login")
        }
        const details = {
            UserDetails: response.profileObj,
            token: response.accessToken
        }
        localStorage.setItem('udetails',JSON.stringify(details));
        //console.log(response)
        this.props.dispatch({
            type:AUTH_ACTION.LOGIN,
            payload: details.token
        });
       
        
    }

    logout = () => {
        localStorage.removeItem('udetails');
        this.props.dispatch({
            type:AUTH_ACTION.LOGOUT
        })
        this.props.dispatch({
            type:PROFILE_ACTION.RESET
        })
    }
    render(){
      

        return(
           <React.Fragment>
            {
                !this.props.auth.isAuth && 
                <GoogleLogin
                clientId={config.clientId}
                buttonText="Login"
                onSuccess={this.googleLogin}
                onFailure={this.googleLogin}
                scope="https://www.googleapis.com/auth/youtube"
                isSignedIn={true}
            />
            }
            {
             this.props.auth.isAuth && 
             
                <p>
                    <Link style={{color:'white'}} to={`/playlist/${this.props.auth.token}`}>My Playlist</Link>
                    <p style={{color:'white'}} >{this.props.profileName}</p>
                    <GoogleLogout
                    clientId={config.clientId}
                    buttonText="Logout"
                onLogoutSuccess={this.logout}
                />
               </p>
            
            }
            
            
            </React.Fragment>
            
        )
    }
}

function mapStateToProps(state){
    console.log("In State of mapStateToProps",state)
    return {
        auth:state.auth,
        profileName:state.profile.name
    }
}

export default connect(mapStateToProps)(Login);