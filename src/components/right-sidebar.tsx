"use client";

import {
  Home,
  Contact,
  Briefcase,
  BookOpen,
  PenTool,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type Props = {
  onToggle: (open: boolean) => void;
};

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "Services", icon: Settings, href: "#services" },
  { name: "Work", icon: Briefcase, href: "#work" },
  { name: "Resume", icon: BookOpen, href: "#resume" },
  { name: "Blog", icon: PenTool, href: "#blog" },
  { name: "Contact", icon: Contact, href: "#contact" },
];

function RightSidebar({ onToggle }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  // Only apply margin shift on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        onToggle(false);
      } else {
        onToggle(isOpen);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onToggle]);

  return (
    <>
      {/* Toggle Button */}
      <div className="top-4 right-4 z-30 absolute transition-all duration-300">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <div
            className={`transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <Menu />
          </div>
        </Button>
      </div>
      <div className="top-4 right-44 z-30 absolute transition-all duration-300">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <div
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <X />
          </div>
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "top-0 right-0 h-full bg-white dark:bg-zinc-800 shadow-lg transition-all duration-300 z-25 absolute",
          isOpen ? "w-56" : "w-0"
        )}
        style={{ width: isOpen ? "14rem" : "0" }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 font-semibold text-sm text-gray-800 dark:text-gray-100">
            {isOpen ? "" : ""}
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2 p-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition text-gray-800 dark:text-gray-100"
                  >
                    <item.icon className="h-5 w-5" />
                    {isOpen && <span className="text-sm">{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default RightSidebar;
