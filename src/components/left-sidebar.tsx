"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on window resize to large screens
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
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </Button>
      </div>

      {/* Left Sidebar */}
      <aside
        className={cn(
          " top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transition-transform duration-300 absolute",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:block"
        )}
        style={{ width: "16rem" }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white p-6 border-b">
          <div className="flex flex-col items-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src="/images/profileimg.png" alt="Profile photo" />
            </Avatar>
            <h2 className="text-xl font-bold">Ali Joya</h2>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className="overflow-y-auto h-[calc(100vh-232px)] p-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex flex-col items-center mb-6">
            <div className="flex flex-row gap-5">
              <div>
                <ul>
                  <li>Residence:</li>
                  <li>City:</li>
                  <li>Age:</li>
                </ul>
              </div>
              <div dir="rtl" className="text-gray-600">
                <ul>
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
