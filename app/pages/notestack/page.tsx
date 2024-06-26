import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white font-mono px-4">
      <img className="z-[-1] fixed inset-0 w-full h-full object-cover" src="/saturn.png" alt="bg" />
      <h1 className="my-10 text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-center">Note Stack</h1>
      <img
        src="/notestack.png"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[840px] border-[3px] border-white/50 rounded-md"
        style={{ height: 'auto' }}
      />
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        Note Stack is an AI Note taking platform. Students can upload texts and record audio for the AI to process and summarize. Not only does our platform generate notes, we also 
        have a note sharing feature, where students can publish their notes on to the website and share with other students.
      </p>
      <img
        src="/noteai.png"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[840px] border-[3px] border-white/50 rounded-md"
        style={{ height: 'auto' }}
      />
      <img
        src="/noteai2.png"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[840px] border-[3px] border-white/50 rounded-md mt-5"
        style={{ height: 'auto' }}
      />
      <h1 className="text-xl sm:text-2xl my-5 text-center">Windy City Hacks:</h1>
      <img
        src="/windycityhacks.JPG"
        className="w-full max-w-[90%] md:max-w-[500px] lg:max-w-[840px] border-[3px] border-white/50 rounded-md mt-5"
        style={{ height: 'auto' }}
      />
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        Windy City Hacks is one of Chicago's biggest and most competitive high-school hackathons. Since it was very competitive, me and my team pushed ourselves to our best to create this website.
      </p>
      <p className="text-lg sm:text-xl my-10 break-words max-w-2xl text-center">
        Demo Video Coming Soon
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="">
          <button className="bg-green-500 rounded-md text-black p-2 container_anim">Coming Soon</button>
        </Link>
        <Link href="">
          <button className="bg-green-500 rounded-md text-black p-2 container_anim">Coming Soon</button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
