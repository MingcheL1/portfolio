import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

export const Technologies:FC=()=>{
    return(
        <div>
            <div className="flex flex-col items-center my-10 text-white">
                Languages I use:
                <div className="flex space-x-4 mt-14">
                    <div className="relative group"><img src="/icons/html.png" className="w-8 h-8 links_anim"/><span className="popup_box">html</span></div>
                    <div className="relative group"><img src="/icons/css.png" className="w-8 h-8 links_anim" /><span className="popup_box">css</span></div>
                    <div className="relative group"><img src="/icons/tailwind.png" className="links_anim"/><span className="popup_box">tailwind css</span></div>
                    <div className="relative group"><img src="/icons/js.png" className="w-8 h-8 links_anim"/><span className="popup_box">javascript</span></div>
                    <div className="relative group"><img src="/icons/typescript.png" className="w-8 h-8 links_anim"/><span className="popup_box">typescript</span></div>
                    <div className="relative group"><img src="/icons/react.png" className="w-8 h-8 links_anim"/><span className="popup_box">react</span></div>
                    <div className="relative group"><img src="/icons/threejs.png" className="w-8 h-8 links_anim bg-white rounded-md"/><span className="popup_box">threeJS/threeFiber</span></div>
                    <div className="relative group"><img src="/icons/java.png" className="w-8 h-8 links_anim"/><span className="popup_box">java</span></div>
                    <div className="relative group"><img src="/icons/python.png" className="w-8 h-8 links_anim"/><span className="popup_box">python</span></div>
                    <div className="relative group"><img src="/icons/ue5.png" className="w-8 h-8 links_anim rounded-md"/><span className="popup_box">unreal engine</span></div>
                </div>
            </div>
        </div>
    )
}