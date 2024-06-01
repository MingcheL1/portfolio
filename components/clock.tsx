import { FC, useState } from "react";
import React from "react";

export const Clock:FC=()=>{
    const d=new Date();
    const [currentTime, setCurrentTime]=useState("");
    React.useEffect(() => {
        const formatTime = (time: number): string => {
            return time.toString().padStart(2, '0');
        };

        const updateClock = () => {
            const d = new Date();
            const hours = d.getHours();
            const minutes = formatTime(d.getMinutes());
            const seconds = formatTime(d.getSeconds());
            setCurrentTime(`${hours} : ${minutes} : ${seconds}`);
        };

        updateClock(); 
        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);
    return(
        <div className="">
            {currentTime}
        </div>
    )
}