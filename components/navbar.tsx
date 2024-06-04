import { FC } from "react"
import Link from "next/link"

export const Navbar:FC=()=>{
    return(
            <div className="bg-black py-2 lg:w-full md:w-80 sm:w-40 h-auto font-mono ">
                <div className="grid grid-cols-[1fr_max-content_1fr] place-items-center">
                    <div className="ml-0 lg:w-64 md:w-36 sm:24 ">
                        <Link href="/" className=" text-white ">
                            <img src="/portfolio.png" className="w-20 h-20 container_anim"/>
                        </Link>
                    </div>
                    <div className="grid grid-flow-col gap-12 text-2xl ">
                        <Link href="/pages/about" className=" text-white underline_anim">
                            About Me
                        </Link>
                        <Link href="/pages/projects" className=" text-white underline_anim">
                            Projects
                        </Link>
                        <Link href="/pages/contact" className=" text-white underline_anim">
                            Contact
                        </Link> 
                    </div>
                </div> 
            </div>
        )
}