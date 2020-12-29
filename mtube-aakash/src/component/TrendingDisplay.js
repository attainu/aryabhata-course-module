import React from 'react';
import './Trending.css';


const TrendingDisplay = (props) => {
    console.log("in display>>>>",props)
    const renderVideos = ({tvideos}) => {
        if(tvideos){
            return tvideos.items.map((data) => {
                return(
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <iframe width="300" height="150" src={`https://www.youtube.com/embed/${data.id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="tileComponent2">
                            {data.snippet.title}
                            <p>{data.snippet.channelTitle}</p>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <p className="trendingHeading">
                    Trending Videos
            </p>
            <div>
                {renderVideos(props)}
            </div>
            
        </div>
    )
}

export default TrendingDisplay;