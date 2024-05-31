import { GithubIcon, InstagramIcon, Youtube, YoutubeIcon } from "lucide-react"
import Link from "next/link"
import { FC } from "react"

export const Footer:FC=()=>{
    return(
        <footer className="flex flex-col items-center my-10 text-white">
            <div className="flex space-x-4">
                <div className="relative group"><Link href="https://www.youtube.com/@AP_NerdTheory"><YoutubeIcon className="links_anim"/></Link><span className="popup_box">YouTube</span></div>
                <div className="relative group"><Link href="https://www.instagram.com/xiao_ming2007/"><InstagramIcon className="links_anim"/></Link><span className="popup_box">Instagram</span></div>
                <div className="relative group"><Link href="https://github.com/MingcheL1"><GithubIcon className="links_anim"/></Link><span className="popup_box">Github</span></div>
            </div>
        </footer>
    )
}