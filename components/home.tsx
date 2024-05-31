"use client"
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Clock } from "./clock";

export const Home: FC = () => {
  return (
    <div className="relative">
      <img className="z-[-1] fixed inset-0  w-full h-full" src="/bg.jpeg" alt="background"/>
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-4xl text-white">
            <Clock/>
        </div>
    </div>
    </div>
    

  );

};
