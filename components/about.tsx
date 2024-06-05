import { FC } from "react";
import { Technologies } from "./technologies";
import Link from "next/link";

export const About: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-mono">
      <img className="z-[-1] fixed inset-0 w-full h-full object-cover" src="/BG.png" alt="bg" />
      <h1 className="my-10 text-4xl sm:text-5xl md:text-6xl font-bold font-sans">ABOUT ME</h1>
      <img
        src="/aboutme.png"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[740px] border-[3px] border-white/50 rounded-md"
        style={{ height: 'auto' }}
      />
      <p className="text-lg sm:text-xl font-mono my-10 break-words max-w-2xl px-4">
        Hello! I'm Mingche, a junior in high school with a passion for coding and technology. My journey into the world of programming began in 2015 when I started coding in Scratch. Since then, my interest and skills have grown significantly. In 2021, I ventured into Python, and a year later, I started learning Java. I recently completed the AP Computer Science A course in 2023, which has further solidified my understanding and love for coding.
      </p>
      <h1 className="font-bold text-xl sm:text-2xl my-5">Hobbies: </h1>
      <p className="text-lg sm:text-xl font-mono my-10 break-words max-w-2xl px-4">
        Outside of coding, I enjoy a balanced lifestyle with various hobbies and interests. I love going to the gym, listening to music, and playing video games. Spending quality time with my friends and family is essential to me, and I cherish our vacations and moments in nature.
      </p>
    </div>
  );
};
