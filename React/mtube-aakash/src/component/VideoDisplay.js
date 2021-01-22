import React from 'react';

const VideoDisplay = (props) => {
   
    const renderVideo = ({videoD})=> {
        
        if(videoD){
            console.log("props>>>>>",videoD.items[0].snippet)
            return (
                <div className="row">
                <div className="col-md-9">
                     <iframe width="800" height="450" src={`https://www.youtube.com/embed/${videoD.items[0].id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2>{videoD.items[0].snippet.title}</h2>
                    <h4>{videoD.items[0].snippet.channelTitle}</h4>
                    <h4>{videoD.items[0].snippet.publishedAt}</h4>
                    
                </div>
                <div className="col-md-3">
                    <h2>Related Videos</h2>
                </div>
                 </div>
            )
        }
       
    }
    return(
        <React.Fragment>
          {renderVideo(props)}
        </React.Fragment>
    )
}

export default VideoDisplay;