import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
class Profile extends React.Component {

    /**
     * This meathod is also correct, commenting this to achieve same functioning with render()
     */
    componentDidUpdate() {
        if(!this.props.isLoggedIn) {
            this.props.history.push('/');
        }
    }
    

    componentDidMount() {
        if(!this.props.isLoggedIn) {
            this.props.history.push('/');
        }
    }

    render(){
        // console.log(this.props)
        // if(!this.props.isLoggedIn) {
        //     return <Redirect to={'/'} />
        // }
        
        return (
            <div>
                <h1>User Profile</h1>
                <div>
                    <img style={{width: "100px", height:"100px", borderRadius: "50%"}} alt={this.props.profile.name} src={this.props.profile.imageUrl} />
                </div>
                <div>
                    <label>Name: </label>
                    <label>{this.props.profile.name}</label>
                </div>
                <div>
                    <label>Email: </label>
                    <label>{this.props.profile.email}</label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isAuthenticated,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile);
