import Link from "next/link";
import { FC } from "react";


export const Projects:FC=()=>{
    return(
        <div className="flex justify-center">
            <img className="z-[-1] fixed inset-0  w-full h-full" src="/BG.png" alt="background"/>
            <div className="space-y-10 mt-10 ">
                <div className="bg-white rounded-lg shadow-md max-w-md mt-20 p-5 container_anim">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <Link href="https://youtu.be/SpOICVKIqJM"><img src="/Logo2.png" alt="questify logo" className="w-full h-auto rounded-md"/></Link>
                        </div>
                        <div className="w-2/3 ml-4">
                        <Link href="https://65ef5fa575301b094eb5e8ef--dazzling-jelly-ba9e11.netlify.app/home/home.html"><h2 className="text-xl font-semibold underline_anim">Questify</h2></Link>
                        <p className="text-gray-600">
                            My first web dev project, won third place in my school hackathon. This project was made in 24 hours along with my group. I later remade the project using NextJS.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-md mt-20 p-5 container_anim">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <Link href="https://youtu.be/SpOICVKIqJM"><img src="/TaskMap.png" alt="TaskMap logo" className="w-full h-auto rounded-md"/></Link>
                        </div>
                        <div className="w-2/3 ml-4">
                        <Link href="https://github.com/Disguised-Coffee/hshacks-2024-v2" ><h2 className="text-xl font-semibold underline_anim">Task Map</h2></Link>
                        <p className="text-gray-600">
                            My second hackathon project, won HSHACKS second place. Unfortunately it is unfinished because we had only 8 hours to do it. 
                        </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-md mt-20 p-5 container_anim">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <Link href="https://www.projectcad.org/"><img src="/ProjectCAD.png" alt="ProjectCAD Logo" className="w-full h-auto rounded-md"/></Link>
                        </div>
                        <div className="w-2/3 ml-4">
                        <Link href="https://www.projectcad.org/" ><h2 className="text-xl font-semibold underline_anim">Project CAD</h2></Link>
                        <p className="text-gray-600">
                            Project CAD is a website that I helped making with a few other web devs for a non-profit organization called Project CAD.
                            I found myself being more comfortable with ThreeJS and ReactThreeFiber by participating in this project. 
                        </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-md mt-20 p-5 container_anim">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <Link href="https://www.stembridged.com/"><img src="" alt="Stembridge Logo" className="w-full h-auto rounded-md"/></Link>
                        </div>
                        <div className="w-2/3 ml-4">
                        <Link href="https://www.stembridged.com/" ><h2 className="text-xl font-semibold underline_anim">Stem Bridge</h2></Link>
                        <p className="text-gray-600">
                            I use to tutor math at this non-profit. As I developed my skill in web dev, the founder decided to recruit me to help him write 
                            the website. 
                        </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md max-w-md mt-20 p-5 container_anim">
                    <div className="flex items-center">
                        <div className="w-1/3">
                            <Link href="https://mingche.vercel.app/"><img src="/portfolio.png" alt="Mingche's Website" className="w-full h-auto rounded-md"/></Link>
                        </div>
                        <div className="w-2/3 ml-4">
                        <Link href="https://mingche.vercel.app/" ><h2 className="text-xl font-semibold underline_anim">Mingche.com</h2></Link>
                        <p className="text-gray-600">
                            My second solo project following up the remake of questify in NextJS. This website is also my first published website that you are
                            viewing right now! This website is mostly front end with a bit of backend on the contact me page, overall one of my favorite projects I have made.
                            (Made with NextJS deployed with Vercel) {/* eslint-disable-line react/no-unescaped-entities */}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
