import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

export const Technologies:FC=()=>{
    return(
        <div>
            <div className="flex flex-col items-center my-10 text-white">
                Languages I use:
                <div className="flex gap-4 mt-14">
                    <Link href="https://www.w3schools.com/html/html_intro.asp"><div className="relative group"><img src="/icons/html.png" className="w-8 h-8 links_anim"/><span className="popup_box">html</span></div></Link>
                    <Link href="https://www.w3schools.com/css/default.asp"><div className="relative group"><img src="/icons/css.png" className="w-8 h-8 links_anim" /><span className="popup_box">css</span></div></Link>
                    <Link href="https://tailwindcss.com/docs/installation"><div className="relative group"><img src="/icons/tailwind.png" className="w-10 h-10 links_anim"/><span className="popup_box">tailwind css</span></div></Link>
                    <Link href="https://www.w3schools.com/Js/"><div className="relative group"><img src="/icons/js.png" className="w-8 h-8 links_anim"/><span className="popup_box">javascript</span></div></Link>
                    <Link href="https://www.typescriptlang.org/docs/"><div className="relative group"><img src="/icons/typescript.png" className="w-8 h-8 links_anim"/><span className="popup_box">typescript</span></div></Link>
                    <Link href="https://react.dev/"><div className="relative group"><img src="/icons/react.png" className="w-8 h-8 links_anim"/><span className="popup_box">react</span></div></Link>
                    <Link href="https://threejs.org/"><div className="relative group"><img src="/icons/threejs.png" className="w-8 h-8 links_anim bg-white rounded-md"/><span className="popup_box">threeJS/threeFiber</span></div></Link>
                    <Link href="https://www.java.com/en/"><div className="relative group"><img src="/icons/java.png" className="w-8 h-8 links_anim"/><span className="popup_box">java</span></div></Link>
                    <Link href="https://www.python.org/"><div className="relative group"><img src="/icons/python.png" className="w-8 h-8 links_anim"/><span className="popup_box">python</span></div></Link>
                    <Link href="https://cplusplus.com/"><div className="relative group"><img src="/icons/cpp.png" className="w-8 h-8 links_anim"/><span className="popup_box">C++</span></div></Link>
                    <Link href="https://www.unrealengine.com/en-US/unreal-engine-5"><div className="relative group"><img src="/icons/ue5.png" className="w-8 h-8 links_anim rounded-md"/><span className="popup_box">unreal engine blueprint</span></div></Link>
                </div>
            </div>
        </div>
    )
}