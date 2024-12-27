import Link from "next/link";
import { FC } from "react";

export const Other: FC = () => {
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
                src="/Starshell.png"
                alt="questify logo"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:ml-4 mt-4 md:mt-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline_anim text-black">Starshell</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Self-Customized Powershell
              </p>
              <Link href="https://github.com/MingcheL1/Starshell">
                <button className="my-2 bg-black flex justify-center text-white rounded-xl p-2 shadow-md text-xs sm:text-sm md:text-base">
                  View Setup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
