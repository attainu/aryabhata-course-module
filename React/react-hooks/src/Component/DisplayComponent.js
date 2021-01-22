import React from 'react';

function Display(props){
    const renderList = ({mydata}) => {
        if(mydata){
            return mydata.map((item) => {
                return(
                    <div>
                        <h1>{item.city_name}</h1>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>City List</h2>
            </center>
            {renderList(props)}
        </div>
    )
}


export default Display