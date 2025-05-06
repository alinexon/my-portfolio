"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

type Props = {
  isRightSidebarOpen: boolean;
  showImage: boolean;
  setShowImage: (value: boolean) => void;
};

function MainContent({ isRightSidebarOpen, showImage, setShowImage }: Props) {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "143", label: "Completed Projects" },
    { value: "114", label: "Happy Customers" },
    { value: "20+", label: "Honors and Awards" },
  ];
  return (
    <>
      <header className=" fixed lg:absolute top-0 left-0 w-full lg:max-w-[1500px] h-20   bg-white shadow-lg dark:bg-zinc-900 dark:shadow-2xl z-20 flex justify-center items-center">
        <div className="m-auto ">
          <ModeToggle />
        </div>
      </header>

      <main
        className={`transition-all duration-300 px-4 sm:px-8 md:px-10 lg:px-16 py-8 sm:py-10  md:py-12 lg:pt-28 pt-24 min-h-screen relative z-10 lg:ml-64 ${
          isRightSidebarOpen ? "lg:translate-x-[-12rem]" : "lg:translate-x-0"
        }`}
      >
        {showImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 w-full h-full shadow-lg flex items-center justify-center z-100 cursor-pointer transition-all"
            onClick={() => setShowImage(false)}
          >
            <Image
              width={1200}
              height={1200}
              src="/images/profileimg.png"
              alt="Zoomed profile"
              className="w-full h-full object-contain animate-zoomIn"
            />
          </div>
        )}
        <section
          id="home"
          className=" text-gray-800 dark:text-gray-100 mt-4 flex flex-col"
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-[1100px] h-[350px] rounded-xl">
              <Image
                src="/images/mountain.png"
                alt="Background"
                fill
                className="object-cover w-full h-full opacity-50"
                priority
              />
              <section
                className="
                  relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8  dark:text-white "
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      Discover my Amazing <br /> Art Space!
                    </h1>
                    <p className="text-lg sm:text-sm md:text-2xl font-semibold text-gray-700 dark:text-white">
                      &lt;<span className="text-yellow-300 ">code</span>&gt;I
                      build
                      <TypeAnimation
                        sequence={[
                          " design mockups.",
                          2000,
                          "",
                          " responsive design.",
                          2000,
                          "",
                          " web application.",
                          2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-gray-700 dark:text-white"
                      />
                      &lt;<span className="text-yellow-300">/code</span>&gt;
                    </p>
                    <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-600 transform transition-all duration-300 hover:-translate-y-0.5">
                      <a href="#"> EXPLORE NOW </a>
                    </Button>
                  </div>
                </div>
              </section>
              {/* Person Image */}
              <div className="hidden lg:block absolute right-[-40px] top-[-90px]  ">
                <Image
                  src="/images/personimg.png"
                  alt="Person Image"
                  width={500}
                  height={500}
                  className="h-[440px] w-auto object-contain rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto px-4 py-7">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6 text-center">
              {stats.map((stat, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-xl sm:text-sm md:text-3xl font-bold text-yellow-500 dark:text-yellow-400 mr-2 sm:mr-3">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="services">
          <h2 className="font-bold text-gray-800 dark:text-white mb-5 text-xl text-center lg:text-left">
            My Service
          </h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 dark:bg-zinc-900 p-5  w-full">
              <h2 className="text-gray-900 font-bold dark:text-white">
                Web Development
              </h2>
              <p className="text-sm leading-6 text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit
              </p>
              <div className="flex items-center">
                <a
                  href="contact"
                  className="group font-bold text-yellow-700 dark:text-yellow-400 uppercase text-sm hover:text-yellow-600 hover:drop-shadow-[0_0_3px_rgba(234,179,8,0.1)] transition duration-300 flex items-center"
                >
                  order now{" "}
                  <ChevronRight
                    size={15}
                    strokeWidth={2}
                    className="ml-1 text-yellow-700 dark:text-yellow-600 transition duration-500 transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Repeat for other cards */}
          </div>
        </section>
      </main>
    </>
  );
}

export default MainContent;
