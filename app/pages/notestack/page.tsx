import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-mono px-4">
      <img className="z-[-1] fixed inset-0 w-full h-full object-cover" src="/saturn.png" alt="bg" />
      <h1 className="my-10 text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-center">Note Stack</h1>
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        Note Stack is an AI Note taking platform. Students can upload texts and record audio for the AI to process and summarize. Not only does our platform generate notes, we also 
        have a note sharing feature, where students can publish their notes on to the website and share with other students.
      </p>
      <h1 className="text-xl sm:text-2xl my-5 text-center">Windy City Hacks:</h1>
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        Windy City Hacks is one of Chicago's biggest and most competitive high-school hackathons. Since it was very competitive, me and my team pushed ourselves to our best to create this website.
      </p>
      <iframe
        width="100%"
        height="auto"
        className="max-w-[90%] md:max-w-[500px] lg:max-w-[840px] aspect-video rounded-md border-[3px] border-white/50"
        src="https://www.youtube.com/embed/2zYaur3sjw8?si=5qAveIcwYuaj5oyF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        This demo video showcases the functionality of the flight control system. I wrote this system for my team in the UAS4STEM competition in 2023, so this code is not being updated anymore.
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="https://github.com/MingcheL1/DroneCode/tree/main">
          <button className="bg-green-500 rounded-md text-black p-2 container_anim">View Code</button>
        </Link>
        <Link href="https://www.youtube.com/embed/2zYaur3sjw8?si=5qAveIcwYuaj5oyF">
          <button className="bg-green-500 rounded-md text-black p-2 container_anim">View Video</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
