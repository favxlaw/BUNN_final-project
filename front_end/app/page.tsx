"use client"

//import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-black font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">
              {" "}
              Web3 Blockchain 
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block text-yellow-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/About"
              className="rounded-[20px] group relative bg-green-500 hover:bg-green-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            </div>
        </div>
      </div> 
     
    </main>
  );
}


