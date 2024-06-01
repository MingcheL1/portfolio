import { FC, useState } from "react";
import React from "react";

export const Clock:FC=()=>{
    const d=new Date();
    const [currentTime, setCurrentTime]=useState(new Date());
    React.useEffect(()=>{
        

        const timer=setInterval(()=>{
            setCurrentTime(new Date());

        },1000);
        return ()=> clearInterval(timer);
    },[currentTime]);
    return(
        <div className="">
            {currentTime.toLocaleTimeString()}
        </div>
    )
}