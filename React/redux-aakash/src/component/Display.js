import React from 'react';

const Display = (props) => {

    const renderView = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }
    return(
        <div>
            <h3>Movie List</h3>
            {renderView(props)}
        </div>
    )
}


export default Display;