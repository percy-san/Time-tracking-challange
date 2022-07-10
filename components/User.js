import React from "react"
import Activities from "./Activities"

export default function User(props){
    
    function dailyToggle(){
        
    }
    function dailyToggle(){
        
    }
    function dailyToggle(){
        
    }
        
    return(
        <div className="user">
            <div className="info">
                <img src="./images/image-jeremy.png" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <div className="interval">
                <a href="#" onClick={props.dailyToggle}>Daily</a>
                <a href="#" onClick={props.weeklyToggle}>Weekly</a>
                <a href="#" onClick={props.monthlyToggle}>Monthly</a>
                
            </div>
        </div>
    )
}