"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

type Props = {
  isRightSidebarOpen: boolean;
};

function MainContent({ isRightSidebarOpen }: Props) {
  return (
    <>
      <header className="h-16 mr-16">
        <div className="sm:ml-8 lg:ml-96 mt-2 ml-40 dark:sm:ml-8 dark:lg:ml-96">
          <ModeToggle />
        </div>
      </header>

      <main
        className={`transition-all duration-300 px-16 py-16 min-h-screen relative z-10 lg:ml-64 ${
          isRightSidebarOpen ? "lg:translate-x-[-12rem]" : "lg:translate-x-0"
        }`}
      >
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
