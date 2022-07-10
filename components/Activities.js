import React from "react"
import User from "./User"

export default function Activities(props){
    
    const [current,setCurrent] = React.useState(props.info.timeframes.daily.current)
    const [previous,setPrevious] = React.useState(props.info.timeframes.daily.previous)
    
    const styles = {
        backgroundColor:props.info.backgroundColor,
        zIndex: -1
    }
    return(
        <div className="act-box" style={styles}>
           <img src={`./images/${props.info.image}`}/>
           <div className="act">
                <p className="title">{props.info.title}</p>
                <div className="timeframes">
                    <h1 className="current-time">{current}hrs</h1>
                    <p className="previous-time">Last Week - {previous}hrs</p>
                </div>
           </div>
        
            
        </div>
    )
}