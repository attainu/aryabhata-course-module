import React from 'react';

const CommentDisplay = (props) => {

    const renderComment = ({commentD}) => {
        if(commentD){
            return commentD.items.map((data) => {
                return(
                    <React.Fragment>
                    <div className="row">
                        <div className="col-md-1">
                            <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                        </div>
                        <div className="col-md-8">
                            <h3>{data.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                            <h4>{data.snippet.topLevelComment.snippet.textDisplay}</h4>
                        </div>
                    </div>
                    <hr/>
                    </React.Fragment>
                )
            })
        }
    }
    return(
        <React.Fragment>
            {renderComment(props)}
        </React.Fragment>
    )
}

export default CommentDisplay;