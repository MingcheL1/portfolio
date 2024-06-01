import { FC, useState } from "react";
import React from "react";

export const Clock:FC=()=>{
    const d=new Date();
    const [currentTime, setCurrentTime]=useState("");
    React.useEffect(()=>{
        const formatTime = (time: number): string => {
            return time.toString().padStart(2, '0');
        };

        const date=d.getHours()+" : "+formatTime(d.getMinutes())+" : "+formatTime(d.getSeconds());
        const timer=setInterval(()=>{
            setCurrentTime(date);

        },1000);
        return ()=> clearInterval(timer);
    },[currentTime]);
    return(
        <div className="">
            {currentTime}
        </div>
    )
}