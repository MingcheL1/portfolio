import { FC, useState } from "react";
import React from "react";

export const Clock:FC=()=>{
    const d=new Date();
    const [currentTime, setCurrentTime]=useState("");
    React.useEffect(()=>{
        const date=d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();
        const timer=setInterval(()=>{
            setCurrentTime(date);

        },1000);
        return ()=> clearInterval(timer);
    },[currentTime]);
    return(
        <div className="text-black">
            {currentTime}
        </div>
    )
}