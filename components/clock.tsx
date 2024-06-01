import { FC, useState } from "react";
import React from "react";
type Props={
    time:number
}
export const Clock=({time:initial}: Props)=>{
    const d=new Date();
    const [currentTime, setCurrentTime]=useState(new Date(initial));
    React.useEffect(()=>{
        

        const timer=setInterval(()=>{
            setCurrentTime(new Date());

        },1000);
        return ()=> clearInterval(timer);
    },[currentTime]);
    return(
        <div className="">
            {currentTime.toLocaleTimeString(undefined,{
                hour:"2-digit",
                minute:"2-digit",
                second:"2-digit"
            })}
        </div>
    )
}