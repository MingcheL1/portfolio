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
                    <p className="break-words text-2xl mt-4 max-w-4xl">
                        I am Mingche, I am currently a <span className="font-bold">Junior</span> in Highschool.
                        Some of my hobbies include coding, going to the gym, listening to music, playing & making videogames,
                        uploading YouTube videos and more.
                        I started coding way back in 2015, when I made random stuff on scratch for fun. In 2019, I was introduced to python.
                        From then, I made random projects until finally in eight grade I decided to make an
                        unfinished text rpg game in replit, which I ended up losing the files for because it was made on my middle school account. In Highschool,
                        I decided to take many CS and CS related classes, such as Java, AP Computer Science A, Game Development 1 and 2. 
                        I also decided to participate in Hackathons, where I first got introduced to web development. In my first hackathon I did (my school hackathon),
                        I was assigned to make the front-end of the website along with one of my other classmates. Because I had no prior experience with web development, 
                        I had to learn html and css from scratch, which ended up being a very fun experience. After the hackathon, I taught myself ReactJS by using the
                        NextJS framework to help others with writing their websites. <span className="font-bold">I am really excited for all the challenges
                        and projects coming up for me in Junior year and Senior year of HS!</span>
                    </p>
            </div>
        </div>
    )
}