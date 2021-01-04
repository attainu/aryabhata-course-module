import React,{Component} from 'react';
import {connect} from 'react-redux';
import {VideoById,CommentById} from '../actions/actionfile';
import CommentDisplay from '../component/CommentDisplay';
import VideoDisplay from '../component/VideoDisplay.js';

class VideoDetails extends Component{
    componentDidMount(){
        this.props.dispatch(VideoById(this.props.match.params.id))
        this.props.dispatch(CommentById(this.props.match.params.id))
    }
    render(){
        return(
            <div>
                <VideoDisplay videoD={this.props.video.Videobyid}/>
                <CommentDisplay commentD={this.props.video.Commentbyid}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        video:state.videos
    }
}

export default connect(mapStateToProps)(VideoDetails);