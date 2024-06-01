"use client"
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Clock } from "./clock";


export const Home: FC = () => {
  return (
    <div className="relative">
      <img className="z-[-1] fixed inset-0  w-full h-full" src="/BG.png" alt="background"/>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-10 font-bold">Welcome to Mingche's Portfolio! {/* eslint-disable-line react/no-unescaped-entities */} </h1>
          <div className="font-bold text-6xl text-white my-10">
            <Clock/>
          </div>
        </div>
        <div className="flex justify-center ml-80 ">
          <div className="grid grid-cols-[1fr_max-content_1fr] ">
            <div className="text-white max-w-md place-items-center">
              <h1 className="text-4xl font-bold mt-20">Overview:</h1>
              <p className="text-2xl break-words">
                Hello, my name is <span className="font-bold">Mingche</span> and I am a Highschool student who enjoys software development.
                I created this website because I feel like this would be one of the best ways to show my front-end web development skills
                and to connect with other people who share similar interest. I am also planning to make a 3D version of this website after officially publishing it!
              </p>
            </div>
            <img src="Mingche.jpg" className="scale-75 rounded-md "/>
          </div>
        </div>
    </div>
    

  );

};
