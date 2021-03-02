import React,{Fragment, useState, useEffect} from 'react';
import DisplayComponent from './displayComponent';

const url ="https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
    const [title,settitle] = useState('Hooks App');
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    const [city,setCity] = useState()

    const setcounter=()=>{
        setCount(count+1)
    }
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data)=> {
            setCity(data)
        })
    })
    return(
        <Fragment>
            <center>
                <h2>{title}</h2>
                <button onClick={()=>{settitle("React Hooks app")}}>Click Me</button>
                <h2>{count}</h2>
                <button onClick={setcounter}>Counter</button>
                <h2>{count1}</h2>
                <button onClick={()=>{setCount1(count1+1)}}>Counter</button>
                <DisplayComponent cityData={city}/>
            </center>
        </Fragment>
    )

}

export default HooksComponent;