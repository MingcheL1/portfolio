import Link from "next/link";

const Page=()=>{
    return(
        <div className="flex flex-col items-center justify-center text-white space-mono-regular">
            <img className="z-[-1] fixed inset-0 bg-cover" src="/saturn.png" alt="bg"/>
            <h1 className="my-10  text-6xl font-bold font-sans">TASK MAP</h1>
            <img src="/taskmapshowcase.png" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '840px', height: '452px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                Task Map is a service website that allows elderly to request service from nearby students. The website is very easy to navigate as some elderly are unfamiliar with
                modern technology. In addition, students who can volunteer can look at the Map to locate nearby tasks.
            </p>
            <h1 className="font-bold text-2xl my-5">Team: </h1>
            <img src="/team.png" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '840px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                the process of working on Task Map was both fun and painful. Since we only had 8 hours to complete this project,
                all of us were very stressed. Still, it turned out to be a fun experience as I learned a lot about web-dev.
            </p>
            <img src="/secondplace.PNG" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '840px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                This project won HS-Hacks24 second place. Note: due to limited time, the project is not hosted
                and it is unfinished.
            </p>
            <Link href="https://github.com/Disguised-Coffee/hshacks-2024-v2/tree/main"><button className="bg-green-500 rounded-md text-black p-2 container_anim">View Code</button></Link> 
        </div>
    )
}

export default Page;