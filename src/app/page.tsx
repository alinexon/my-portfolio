"use client";

import LeftSidebar from "@/components/left-sidebar";
import MainContent from "@/components/main-content";
import RightSidebar from "@/components/right-sidebar";
import { useState } from "react";

function Page() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen max-w-[1500px] mx-auto relative">
      <LeftSidebar />
      <div className="flex-1 transition-all duration-300">
        <MainContent isRightSidebarOpen={isRightSidebarOpen} />
      </div>
      <RightSidebar onToggle={setIsRightSidebarOpen} />
    </div>
  );
}

export default Page;
