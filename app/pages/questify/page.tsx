import Link from "next/link";

const Page=()=>{
    return(
        <div className="flex flex-col items-center justify-center text-white space-mono-regular">
            <img className="z-[-1] fixed inset-0 w-full h-full" src="/saturn.png" alt="bg"/>
            <h1 className="my-10  text-6xl font-bold font-sans">QUESTIFY</h1>
            <img src="/questifyshowcase.png" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '840px', height: '452px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                Questify is a website that allows service organizations to conenct and provide opportunities to volunteers online. In the modern world, it is hard to make time
                for in-person volunteers as students are filled with school work and tasks. It is even harder to find volunteering opportunities close to you. Thus, Questify serves as a 
                "bridge" for a student to be able to volunteer online at home.
            </p>
            <h1 className="text-2xl my-5 ">Demo Video: </h1>
            <iframe width="840" height="472" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem' }}  src="https://www.youtube.com/embed/SpOICVKIqJM?si=yco4oNIwh5yDx3So" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                This demo video showcases the functionality of Questify. This includes being able to sign up as volunteer/organizations,
                being able to post requests as an organization, being able complete those requests and more. It also showcases how our front-end and 
                back-end interact with each other.
            </p>
            <h1 className="font-bold text-2xl my-5">Team: </h1>
            <img src="/thirdplace.jpg" style={{ border: '3px solid rgba(255, 255, 255, 0.5)', borderRadius: '0.375rem', width: '840px'}} />
            <p className=" text-xl space-mono-regular my-10 word-break max-w-2xl">
                This is a photo of me and my team when this project won 3rd place in our school hack-a-thon. We only had 24 hours to make this project
                and we are all very proud that we we're able to pull it through. Although this website is being hosted, it is not for actual use since it is 
                just a school hack-a-thon project.
            </p>
            <div className="grid grid-cols-[1fr_max-content_1fr] place-items-center space-x-6">
                <Link href="https://65ef5fa575301b094eb5e8ef--dazzling-jelly-ba9e11.netlify.app/home/home.html"><button className="bg-green-500 rounded-md text-black p-2 container_anim">View Site</button></Link> 
                <Link href="https://www.youtube.com/embed/SpOICVKIqJM?si=yco4oNIwh5yDx3So"><button className="bg-green-500 rounded-md text-black p-2 container_anim">View Video</button></Link>
            </div>

        </div>
    )
}

export default Page;