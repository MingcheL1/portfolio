"use client"
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Clock } from "./clock";


export const Home: FC = () => {
  return (
    <div className="relative">
      <img className="z-[-1] fixed inset-0  w-full h-full" src="/BG.png" alt="background"/>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl my-10 font-bold">Welcome to Mingche's portfolio!</h1>
          <div className="font-bold text-6xl text-white my-10">
            <Clock/>
          </div>

        </div>
    </div>
    

  );

};
