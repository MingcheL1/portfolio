import Link from "next/link";
import { FC } from "react";


export const Projects:FC=()=>{
    return(
        <div className="flex justify-center mt-20">
            <img className="z-[-1] fixed inset-0 w-full h-full" src="/BG.png" alt="background" />
            <div className="flex flex-wrap justify-center space-x-10 mt-10">
                <div className="bg-white rounded-lg shadow-md w-1/4 p-5 container_anim h-48 mb-10"> 
                    <div className="flex items-center h-full">
                        <div className="w-1/3">
                            <img src="/Logo2.png" alt="questify logo" className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-semibold underline_anim">Questify</h2>
                            <p className="text-gray-600 text-sm ">
                                My first web dev project, won third place in my school hackathon. This project was made in 24 hours along with my group. I later remade the project using NextJS.
                            </p>
                            <Link href="/pages/questify"><button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md  ">View More</button></Link>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 p-5 container_anim h-48 mb-10">
                    <div className="flex items-center h-full">
                        <div className="w-1/3">
                            <img src="/TaskMap.png" alt="TaskMap logo" className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-semibold underline_anim">Task Map</h2>
                            <p className="text-gray-600 text-sm">
                                My second hackathon project, won HSHACKS second place. Unfortunately it is unfinished because we had only 8 hours to do it.
                            </p>
                            <Link href="/pages/taskmap"><button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md  ">View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 p-5 container_anim h-48 mb-10">
                    <div className="flex items-center h-full">
                        <div className="w-1/3">
                            <img src="/ProjectCAD.png" alt="ProjectCAD Logo" className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-semibold underline_anim">Project CAD</h2>
                            <p className="text-gray-600 text-sm">
                                Project CAD is a website that I helped making with a few other web devs for a non-profit organization called Project CAD.
                            </p>
                            <Link href="/pages/projectCAD"><button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md  ">View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 p-5 container_anim h-48 mb-10">
                    <div className="flex items-center h-full">
                        <div className="w-1/3">
                            <img src="/stembridge.png" alt="Stembridge Logo" className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-semibold underline_anim">Stem Bridge</h2>
                            <p className="text-gray-600 text-sm">
                                I use to tutor math at this non-profit. As I developed my skill in web dev, the founder decided to recruit me to help him write the website.
                            </p>
                            <Link href="/pages/stembridge"><button className="my-2 bg-black flex justify-center text-white rounded-xl p-2  shadow-md ">View More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 p-5 container_anim h-48 mb-10">
                    <div className="flex items-center h-full">
                        <div className="w-1/3">
                            <img src="/portfolio.png" alt="Mingche's Website" className="w-full h-auto rounded-md" />
                        </div>
                        <div className="w-2/3 ml-4">
                            <h2 className="text-xl font-semibold underline_anim">Mingche.com</h2>
                            <p className="text-gray-600 text-sm">
                                My second solo project following up the remake of questify in NextJS. This website is also my first published website that you are viewing right now!{/* eslint-disable-line react/no-unescaped-entities */}
                            </p>
                            <Link href="https://mingche.vercel.app/"><button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md  ">View More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
