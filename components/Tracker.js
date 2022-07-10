import React from "react"
import Activities from "./Activities"
import User from "./User"
import data from "./data"

export default function Tracker(){
    
    const activities = data.map(info =>{
        return(
            <Activities
                key={info.title}
                info={info} 
            />   
        )
    })
    return(
        <div className="tracking-component">
            <User />
            <div className="act-grid">
                {activities}   
            </div>
        </div>
    )
}