import React,{Component} from 'react';
import { SearchVideo } from '../actions/actionfile';
import {connect} from 'react-redux';
import HomeDisplay from '../component/Homedisplay'

class Home extends Component{

    constructor(){
        super()
        this.state={
            userText:''
        }
    }
    componentDidMount(){
        this.props.dispatch(SearchVideo())
    }

    handleSearch=(event) => {
        this.setState({userText:event.target.value});
    }
   
    submitSearch = () => {
        this.props.dispatch(SearchVideo(this.state.userText));
    }

    render(){
        return(
           <React.Fragment>
               <div className="row">
                   <div className="col-md-11">
                    <div className="form-group">
                        <input className="form-control" placeholder="enter search" onChange={this.handleSearch}/>
                    </div>
                   </div>
                   <div className="col-md-1">
                        <button className="btn" onClick={this.submitSearch} ><span className="glyphicon glyphicon-search"></span></button>
                   </div>
               </div>
               <div className="row">
                    <HomeDisplay sVideo={this.props.homeVideo.searchVideo}/>
               </div>
           </React.Fragment>
        )
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        homeVideo:state.videos
    }
}

export default connect(mapStateToProps)(Home);