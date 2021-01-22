import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LatestVideo} from '../actions/actionfile';
import TrendingDisplay from '../component/TrendingDisplay';

class Trending extends Component{
    componentDidMount(){
        this.props.dispatch(LatestVideo())
    }

    render(){
        return(
            <div>
                <TrendingDisplay  tvideos={this.props.videosList.trendingVideo}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        videosList:state.videos
    }
}


export default connect(mapStateToProps)(Trending);