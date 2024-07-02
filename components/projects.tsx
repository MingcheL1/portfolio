import Link from "next/link";
import { FC } from "react";

export const Projects: FC = () => {
  return (
    <div className="flex justify-center mt-20 relative">
      <img
        className="z-[-1] fixed inset-0 w-full h-full object-cover"
        src="/BG.png"
        alt="background"
      />
      <div className="flex flex-wrap justify-center space-x-0 lg:space-x-10 mt-10 px-4 w-full">
      <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/bumblebee.png"
                alt="questify logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Bumblebee Flight Control</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Software system programmed for flight control.
              </p>
              <Link href="/pages/uas4stem">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/Logo2.png"
                alt="questify logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Questify</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                My first web dev project, won third place in my school hackathon.
                This project was made in 24 hours along with my group. I later remade
                the project using NextJS.
              </p>
              <Link href="/pages/questify">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/TaskMap.png"
                alt="TaskMap logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Task Map</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                My second hackathon project, won HSHACKS second place. Unfortunately, it
                is unfinished because we had only 8 hours to do it.
              </p>
              <Link href="/pages/taskmap">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/ProjectCAD.png"
                alt="ProjectCAD Logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Project CAD</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Project CAD is a website that I helped make with a few other web devs for
                a non-profit organization called Project CAD.
              </p>
              <Link href="https://projectcad.org">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  Visit Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/stembridge.png"
                alt="Stembridge Logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Stem Bridge</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                I used to tutor math at this non-profit. As I developed my skill in web
                dev, the founder decided to recruit me to help him write the website.
              </p>
              <Link href="https://stembridged.com">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  Visit Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/portfolio.png"
                alt="Mingche's Website"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Mingche.com</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                My second solo project following up the remake of Questify in NextJS.
                This website is also my first published website that you are viewing right
                now!
              </p>
              <Link href="https://mingche.vercel.app/">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  Visit Site
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 p-5 container_anim mb-10 h-auto">
          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/3">
              <img
                src="/windycityhackslogo.JPG"
                alt="notestack logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Note Stack</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                All in one AI note-taking app. Won Windy City Hacks second place/runner up.
              </p>
              <Link href="/pages/notestack">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
