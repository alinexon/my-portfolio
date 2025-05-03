"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

type Props = {
  isRightSidebarOpen: boolean;
  showImage: boolean;
  setShowImage: (value: boolean) => void;
};

function MainContent({ isRightSidebarOpen, showImage, setShowImage }: Props) {
  return (
    <>
      <header className=" fixed lg:absolute top-0 left-0 w-full lg:max-w-[1500px] h-20   bg-white shadow-lg dark:bg-zinc-900 dark:shadow-2xl z-20 flex justify-center items-center">
        <div className="m-auto ">
          <ModeToggle />
        </div>
      </header>

      <main
        className={`transition-all duration-300 px-16 py-16 pt-32 min-h-screen relative z-10 lg:ml-64 ${
          isRightSidebarOpen ? "lg:translate-x-[-12rem]" : "lg:translate-x-0"
        }`}
      >
        {showImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 w-full h-full shadow-lg flex items-center justify-center z-100 cursor-pointer transition-all"
            onClick={() => setShowImage(false)}
          >
            <img
              src="/images/profileimg.png"
              alt="Zoomed profile"
              className="w-full h-full object-contain animate-zoomIn"
            />
          </div>
        )}
        <section
          id="home"
          className="min-h-screen text-gray-800 dark:text-gray-100"
        >
          <div className="w-full h-16 mx-auto text-center">
            <Image
              src="/images/mountain.png"
              alt="bg Photo"
              width={1000}
              height={300}
              className="h-[400px] w-[1200px] opacity-50 mx-auto"
            />
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              I build beautiful, responsive, and user-friendly web applications.
              I
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainContent;
