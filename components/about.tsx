import { FC } from "react"
import { Technologies } from "./technologies"


export const About:FC=()=>{
    return(
        <div>
            <div className="flex justify-center">
                <img className="z-[-1] fixed inset-0  w-full h-full" src="/BG.png" alt="background"/>  
                <img className="w-80 h-full mt-10" src="/Mingche_Second.jpg"/>
            </div>
            <div className="text-white text-center flex flex-col items-center">
                    <h1 className="font-bold text-4xl mt-10">ABOUT ME</h1>
                    <p className="break-words text-2xl mt-4 max-w-4xl space-mono-regular">
                        I am Mingche, a junior in high school with a passion for coding, gym, music, video games, and YouTube. 
                        I began coding in 2015 with Scratch and moved to Python in 2021, creating various projects including an 
                        unfinished text RPG game. In high school, I took several computer science classes and participated in hackathons, 
                        where I discovered my interest in web development. Learning HTML and CSS for my first hackathon was a fun experience, 
                        and I later taught myself ReactJS using the Next.js framework. I'm excited about the upcoming challenges and projects in my junior and senior years!
                    </p>
            </div>
        </div>
    )
}