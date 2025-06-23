/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-mono px-4">
      <img className="z-[-1] fixed inset-0 w-full h-full object-cover" src="/saturn.png" alt="bg" />
      <h1 className="my-10 text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-center">Angaza Center Online Inventory</h1>
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        This coordinate conversion system can convert camera pixel coordinates to NED and GPS coordinates. Useful for autonomous drone pick-up and drop-off.
      </p>
      <img
        src="/coordinate-experiment.png"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[840px] border-[3px] border-white/50 rounded-md"
        style={{ height: 'auto' }}
      />
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-5">
        <Link href="https://github.com/MingcheL1/Coordinate-Conversion-System">
          <button className="bg-green-500 rounded-md text-black p-2 container_anim">View Code</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
