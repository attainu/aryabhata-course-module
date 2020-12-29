import React from 'react';
import {Link} from 'react-router-dom';


const HomeDisplay = (props) => {
    const renderVideos =({sVideo}) => {
        if(sVideo){
            return sVideo.items.map((data) => {
                return(
                    <div className="row">
                        <div className="col-md-4">
                        <iframe width="400" height="250" src={`https://www.youtube.com/embed/${data.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      
                        </div>
                        <div className="col-md-7">
                            <p><Link to={`/watch/${data.id.videoId}`}>{data.snippet.title}</Link></p>
                            <p>{data.snippet.description}</p>
                            <p>{data.snippet.channelTitle}</p>
                            <p>{data.snippet.publishTime}</p>

                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <React.Fragment>
            {renderVideos(props)}
        </React.Fragment>
    )
}

export default HomeDisplay;