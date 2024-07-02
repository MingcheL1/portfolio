"use client";
import { useState, useEffect, useRef, FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Clock } from "./clock";
import Link from "next/link";
import { CornerRightUp, Rocket } from "lucide-react";
import { FAQ } from "./faq";

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export const Home: FC = () => {
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const newsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsNewsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (newsSectionRef.current) {
      observer.observe(newsSectionRef.current);
    }

    return () => {
      if (newsSectionRef.current) {
        observer.unobserve(newsSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <img
        className={`z-[-1] fixed inset-0 w-full h-full transition-opacity duration-1000 ${
          isNewsVisible ? "opacity-75" : "opacity-100"
        }`}
        src="/BG.png"
        alt="background"
      />
      <img
        className={`z-[-1] fixed inset-0 w-full h-full transition-opacity duration-1000 ${
          isNewsVisible ? "opacity-100" : "opacity-0"
        }`}
        src="/earth.png"
        alt="new background"
      />
      <div className="flex flex-col justify-center items-center px-4">
        <h1 className="text-white lg:text-6xl sm:text-4xl text-3xl my-10 font-bold">
          Welcome to Mingche's Portfolio! {/* eslint-disable-line react/no-unescaped-entities */}
        </h1>
        <div className="font-bold text-6xl text-white my-10">
          <Clock time={new Date().getTime()} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-white max-w-full md:max-w-md lg:h-full md:h-auto sm:h-auto place-items-center p-4">
            <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold mt-20">
              Overview:
            </h1>
            <p className="lg:text-2xl md:text-lg sm:text-sm text-xs lg:w-full md:w-60 sm:w-80 w-full break-words">
              Hello, my name is <span className="font-bold">Mingche</span>, and I am a high school student with a passion for software development. I created this website to showcase my front-end web development skills and connect with others who share similar interests. In the future, I plan to develop a 3D version of this website after its official launch!
            </p>
          </div>
          <img
            src="Mingche.jpg"
            className="max-w-full h-auto lg:w-3/4 md:w-1/2 sm:w-1/4 w-full rounded-md"
            alt="Mingche"
          />
        </div>
      </div>
      <div ref={newsSectionRef} className="flex flex-col justify-center items-center text-white px-4 mt-10">
        <h1 className="lg:text-4xl sm:text-2xl text-xl font-bold">News</h1>
        <div className="bg-gray-900 lg:w-[750px] md:w-[500px] sm:w-full w-full text-white p-6 mt-10 backdrop-opacity-90 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                New Video On My YouTube Channel - Nerd Theory
              </h3>
              <p>Tips & Tricks to winning a hackathon :/</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/thumbnail.jpg" className="w-auto h-40 rounded-md" />
            </div>
          </div>
          <Link href="https://youtu.be/0rdEWANOFnA">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center mt-4 container_anim">
              View Video <CornerRightUp className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="bg-gray-900 lg:w-[750px] md:w-[500px] sm:w-full w-full text-white p-6 mt-10 backdrop-opacity-90 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                STEM BRIDGE IS OFFICIALLY LAUNCHING <Rocket className="ml-2" />
              </h3>
              <p>Stem bridge is a non-profit organization that tutors students in math and coding for free</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/stembridge.png" className="w-36 h-auto rounded-md" />
            </div>
          </div>
          <Link href="https://stembridged.com">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center mt-4 container_anim">
              Visit Site <CornerRightUp className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="bg-gray-900 lg:w-[750px] md:w-[500px] sm:w-full text-white p-6 mt-10 backdrop-opacity-90 rounded-xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in engineering and 3D modeling?
              </h3>
              <p>Project CAD helps unlock the potential in kids from any community</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="/ProjectCAD.png" className="w-48 h-auto rounded-md" />
            </div>
          </div>
          <Link href="https://projectcad.org">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center mt-4 container_anim">
              Visit Site <CornerRightUp className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="mt-10 w-full">
          <FAQ />
        </div>
      </div>
    </div>
  );
};
