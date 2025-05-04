"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
type Props = {
  setZoomed: (open: boolean) => void;
};
function LeftSidebar({ setZoomed }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Toggle button - Only on small screens */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          {!isOpen && <Menu />}
        </Button>
      </div>
      <div className="fixed top-4 left-62 z-50 lg:hidden dark:text-white">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          {isOpen && <X />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "top-0 left-0 h-full bg-white dark:bg-zinc-900 shadow-md dark:shadow-lg transition-transform duration-300 absolute z-40 lg:block",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: "18rem" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 p-6">
          <div className="flex flex-col items-center relative">
            <div onClick={() => setZoomed(true)} className="cursor-pointer ">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/images/profileimg.png" alt="Profile photo" />
                <AvatarFallback>Ahmad</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute group">
              {/* Pulsing Dot */}
              <div
                className="absolute top-18 left-7 h-4 w-4 bg-yellow-500 rounded-full cursor-pointer"
                style={{
                  animation: "heartbeatWave 1.2s ease-in-out infinite",
                  boxShadow: "0 0 0 0 rgba(215, 212, 205, 0.9)",
                }}
              ></div>
              <div
                className="absolute left-14 top-18  flex z-50 bg-white dark:bg-zinc-800 p-2 rounded-md shadow-md whitespace-pre 
                  opacity-0 translate-x-20  transition-all duration-500 ease-out 
                      group-hover:opacity-25 group-hover:translate-x-0  pointer-events-none"
              >
                <span className="text-xs text-gray-800 dark:text-gray-100">
                  <pre>I am available for </pre>
                  freelance hire
                </span>
              </div>
              <div
                className="absolute left-8 top-28 flex border-2 border-white z-60 bg-white dark:bg-zinc-800 p-2 rounded-md shadow-md whitespace-nowrap 
                     opacity-0 translate-x-4 scale-95 transition-all duration-500 ease-out 
                      group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 pointer-events-none"
              >
                <span className="text-xs text-gray-800 dark:text-gray-100">
                  I am available for freelance hire
                </span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-black dark:text-white">
              Ahmad Joya
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto h-[calc(100vh-232px)] p-6 custom-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-row gap-5">
              <div>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Residence:</li>
                  <li>City:</li>
                  <li>Age:</li>
                </ul>
              </div>
              <div dir="rtl" className="text-gray-600 dark:text-gray-400">
                <ul className="space-y-1">
                  <li>Afghanistan</li>
                  <li>Kabul</li>
                  <li>28</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default LeftSidebar;
