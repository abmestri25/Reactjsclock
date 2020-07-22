import React,{useState} from 'react';
import './App.css'

// HOOKS in REACTJS
const App = () => {

// hooks should be inside the Component
//    [current, updated]  = useState(initialValue)

// Functions....

let newTime = new Date().toLocaleTimeString();

const [time, setTime] = useState(newTime)

const GetTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime)
} 

// to call function after specific time span
setInterval(GetTime,1000)

    
    return(
        <>
        <div className="container">
            <h1 className="title" >Welcome to <span className="heading" >ReactJs CLock</span></h1>
            <div className="box">
                <h1 className="count">{newTime}</h1>
                <div className="buttons">

                    <button onClick={GetTime} className="clickme">Get Current Time</button>

                    

                </div>   
            </div>
        </div>
        </>
    )
};

export default App;