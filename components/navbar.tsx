import { FC } from "react"
import Link from "next/link"

export const Navbar:FC=()=>{
    return(
            <div className="bg-black py-2 w-full h-auto ">
                <div className="grid grid-cols-[1fr_max-content_1fr] place-items-center">
                    <div className="ml-0 w-50">
                        <Link href="/" className=" text-white underline_anim">
                            Home 
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