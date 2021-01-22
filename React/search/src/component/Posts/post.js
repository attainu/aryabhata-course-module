import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                Post Page
            </div>
            <div className="panel-body">
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
               </p>
               <div>
                   <h2>JavaScript</h2>
                   <Link to="/post/JavaScript?Author=John">Details</Link>
               </div>
               <div>
                   <h2>React</h2>
                   <Link to="/post/React?Author=Eva">Details</Link>
               </div>
               <div>
                   <h2>Node Js</h2>
                   <Link to="/post/NodeJs?Author=Nikita">Details</Link>
               </div>
            </div>
        </div>
    )
}

export default Post;