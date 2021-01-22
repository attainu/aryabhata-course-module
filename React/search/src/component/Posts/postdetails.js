import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    console.log(props.location.search.split('=')[1])

    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
            {props.match.params.topic} Details Page
            </div>
            <div className="panel-body">
               <p>
                <b>{props.match.params.topic}</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
               </p>
                <h2>By: {props.location.search.split('=')[1]}</h2>
            </div>
        </div>
    )
}

export default PostDetails;