import { FC } from "react"
import { Technologies } from "./technologies"
import Link from "next/link"


export const About:FC=()=>{
    return(
        <div className="flex flex-col items-center justify-center text-white space-mono-regular">
            <img className="z-[-1] fixed inset-0 w-full h-full" src="/BG.png" alt="bg"/>
            <h1 className="my-10  text-6xl font-bold font-sans">ABOUT ME</h1>
            <img src="/aboutme.png" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '740px', height: '552px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                Hello! I'm Mingche, a junior in high school with a passion for coding and technology. 
                My journey into the world of programming began in 2015 when I started coding in Scratch. 
                Since then, my interest and skills have grown significantly. In 2021, I ventured into Python, and a year later, I started learning Java. 
                I recently completed the AP Computer Science A course in 2023, which has further solidified my understanding and love for coding.
            </p>
            <h1 className="font-bold text-2xl my-5">Hobbies: </h1>
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                Outside of coding, I enjoy a balanced lifestyle with various hobbies and interests. 
                I love going to the gym, listening to music, and playing video games. Spending quality time with my friends and family is essential to me, 
                and I cherish our vacations and moments in nature.
            </p>
            
            

        </div>
    )
}