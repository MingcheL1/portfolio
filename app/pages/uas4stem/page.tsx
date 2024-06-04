import Link from "next/link";

const Page=()=>{
    return(
        <div className="flex flex-col items-center justify-center text-white space-mono-regular">
            <img className="z-[-1] fixed inset-0 w-full h-full" src="/saturn.png" alt="bg"/>
            <h1 className="my-10  text-6xl font-bold font-sans">Bumblebee Flight Control</h1>
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                Bumblebee Flight Control is completely written in python. With Bumblebee Flight Control System, you can easily command your drone to fly to any waypoint you set in
                mission planner. You can also RTL, move around, and switch to manual control with a press of a key. This flight control code could be extremely useful in a semi-autonomous mission, 
                although the only downside is it requires wifi.
            </p>
            <h1 className="text-2xl my-5 ">Demo Video: </h1>
            <iframe width="840" height="472" src="https://www.youtube.com/embed/2zYaur3sjw8?si=5qAveIcwYuaj5oyF" className="rounded-md" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                This demo video showcases the functionality of the flight control system. I wrote this system for my team in the UAS4STEM competition in 2023, so this code is not
                being updated anymore.
            </p>
            <div className="grid grid-cols-[1fr_max-content_1fr] place-items-center space-x-6">
                <Link href="https://github.com/MingcheL1/DroneCode/tree/main"><button className="bg-green-500 rounded-md text-black p-2 container_anim">View Code</button></Link>
                <Link href="https://www.youtube.com/embed/2zYaur3sjw8?si=5qAveIcwYuaj5oyF"><button className="bg-green-500 rounded-md text-black p-2 container_anim">View Video</button></Link>
                
            </div>

        </div>
    )
}

export default Page;