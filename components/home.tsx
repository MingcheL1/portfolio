"use client"
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Clock } from "./clock";

export const Home: FC = () => {
  return (
    <div className="relative">
      <img className="z-[-1] fixed inset-0  w-full h-full" src="" alt="background"/>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1>Mingche's Digital Realm</h1>
          </div>
          <div className="font-bold text-4xl text-white">
            <Clock/>
        </div>
    </div>
    </div>
    

  );
  function Bubble(){
    <mesh>
      
    </mesh>
  }
};
