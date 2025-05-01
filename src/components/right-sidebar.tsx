"use client";

import {
  Home,
  Contact,
  Briefcase,
  BookOpen,
  PenTool,
  Settings,
  Menu,
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

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 z-40",
          isOpen ? "w-64" : "w-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 font-semibold text-sm">
            {isOpen ? "Navigation" : ""}
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-2 p-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 p-2 rounded hover:bg-muted transition"
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
