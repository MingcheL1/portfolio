
import { ChevronUp } from "lucide-react";
import { FC } from "react";

export const FAQ: FC = () => {
  return (
    <div className=" text-white flex flex-wrap relative w-full lg:w-1/2 bg-gray-900 px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQs</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Why did you make this website?</span>
                <span className="transition group-open:rotate-180">
                    <ChevronUp />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-200 max-w-md">
                I made this website to showcase my work and connect with people who share similar interest.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How long did it take you to make this website?</span>
                <span className="transition group-open:rotate-180">
                    <ChevronUp />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-200 max-w-md">
                The first deployment of this website only took a day to make. However, I usually update this website once a day
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span>How should I start my own portfolio website but I have no prior experience of web dev, what should I do?</span>
                <span className="transition group-open:rotate-180">
                    <ChevronUp />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-200 max-w-md">
                Start with smaller projects first. Learn plain html, css and javascript first, and then move on to create more complicated projects.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>How did you make this website?</span>
                <span className="transition group-open:rotate-180">
                    <ChevronUp />
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-200 max-w-md">
                    This project was made using the NextJS framework. I used typescript, tailwind css and html for the front-end.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
